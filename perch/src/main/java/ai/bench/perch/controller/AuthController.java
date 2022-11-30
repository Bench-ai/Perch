package ai.bench.perch.controller;

import ai.bench.perch.entity.LoginEntity;
import ai.bench.perch.entity.SignupEntity;
import ai.bench.perch.entity.TokenEntity;
import ai.bench.perch.model.RefreshToken;
import ai.bench.perch.model.User;
import ai.bench.perch.repository.RefreshTokenRepository;
import ai.bench.perch.repository.UserRepository;
import ai.bench.perch.security.JwtHelper;
import ai.bench.perch.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping(value = "/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    RefreshTokenRepository refreshTokenRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    JwtHelper jwtHelper;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    UserService userService;

    private final String REFRESH_TOKEN_CONSTANT = "refreshToken";
    private final String REFRESH_TOKEN_COOKIE_PATH = "/api/auth";

    @PostMapping(value = "/login")
    @Transactional
    public ResponseEntity<TokenEntity> login(@Valid @RequestBody LoginEntity login, HttpServletResponse response) {
        Authentication authentication = authenticationManager
                .authenticate(
                        new UsernamePasswordAuthenticationToken(
                                login.getUsername(),
                                login.getPassword()
                        )
                );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        User user = (User) authentication.getPrincipal();

        RefreshToken rt = new RefreshToken();
        rt.setOwner(user);
        refreshTokenRepository.save(rt);

        String accessToken = jwtHelper.generateAccessToken(user);
        String refreshToken = jwtHelper.generateRefreshToken(user, rt);

        Cookie cookie = new Cookie(REFRESH_TOKEN_CONSTANT, refreshToken);
        cookie.setMaxAge(30 * 24 * 60 * 60);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath(REFRESH_TOKEN_COOKIE_PATH);

        response.addCookie(cookie);

        return ResponseEntity.ok(
                new TokenEntity(
                        user.getId(),
                        accessToken
                )
        );
    }

    @PostMapping(value = "/signup")
    @Transactional
    public ResponseEntity<TokenEntity> signup(@Valid @RequestBody SignupEntity signup, HttpServletResponse response) {
        User user = new User(
                signup.getUsername(),
                signup.getEmail(),
                passwordEncoder.encode(signup.getPassword())
        );
        userRepository.save(user);

        RefreshToken rt = new RefreshToken();
        rt.setOwner(user);
        refreshTokenRepository.save(rt);

        String accessToken = jwtHelper.generateAccessToken(user);
        String refreshToken = jwtHelper.generateRefreshToken(user, rt);

        Cookie cookie = new Cookie(REFRESH_TOKEN_CONSTANT, refreshToken);
        cookie.setMaxAge(30 * 24 * 60 * 60);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath(REFRESH_TOKEN_COOKIE_PATH);

        response.addCookie(cookie);

        return ResponseEntity.ok(
                new TokenEntity(
                        user.getId(),
                        accessToken
                )
        );
    }

    @PostMapping(value = "/logout")
    public ResponseEntity<?> logout(
            @CookieValue(value = REFRESH_TOKEN_CONSTANT, defaultValue = "") String refreshToken,
            HttpServletResponse response) {

        Cookie cookie = new Cookie(REFRESH_TOKEN_CONSTANT, null);
        cookie.setMaxAge(0);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath(REFRESH_TOKEN_COOKIE_PATH);

        response.addCookie(cookie);

        if (refreshTokenExists(refreshToken)) {
            refreshTokenRepository.deleteById(jwtHelper.getTokenIdFromRefreshToken(refreshToken));
            return ResponseEntity.ok().build();
        }
        throw new BadCredentialsException("Invalid token");
    }

    @PostMapping(value = "/logoutAll")
    public ResponseEntity<?> logoutAll(
            @CookieValue(value = REFRESH_TOKEN_CONSTANT, defaultValue = "") String refreshToken,
            HttpServletResponse response) {
        Cookie cookie = new Cookie(REFRESH_TOKEN_CONSTANT, null);
        cookie.setMaxAge(0);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath(REFRESH_TOKEN_COOKIE_PATH);

        response.addCookie(cookie);

        if (refreshTokenExists(refreshToken)) {
            refreshTokenRepository.deleteByOwner_Id(jwtHelper.getUserIdFromRefreshToken(refreshToken));
            return ResponseEntity.ok().build();
        }
        throw new BadCredentialsException("Invalid token");
    }

    @PostMapping(value = "/accessToken")
    public ResponseEntity<TokenEntity> accessToken(
            @CookieValue(value = REFRESH_TOKEN_CONSTANT, defaultValue = "") String refreshToken) {
        if (refreshTokenExists(refreshToken)) {
            User user = userService.findById(jwtHelper.getUserIdFromRefreshToken(refreshToken));
            String accessToken = jwtHelper.generateAccessToken(user);

            return ResponseEntity.ok(
                    new TokenEntity(
                            user.getId(),
                            accessToken
                    )
            );
        }
        throw new BadCredentialsException("Invalid token");
    }

    private boolean refreshTokenExists(String refreshToken) {
        return jwtHelper.validateRefreshToken(refreshToken)
                && refreshTokenRepository.existsById(jwtHelper.getTokenIdFromRefreshToken(refreshToken));
    }
}
