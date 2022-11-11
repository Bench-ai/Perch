package ai.bench.perch.controller;

import ai.bench.perch.entity.LoginEntity;
import ai.bench.perch.entity.SignupEntity;
import ai.bench.perch.entity.TokenEntity;
import ai.bench.perch.model.RefreshToken;
import ai.bench.perch.model.User;
import ai.bench.perch.repository.RefreshTokenRepository;
import ai.bench.perch.repository.UserRepository;
import ai.bench.perch.security.JwtHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @PostMapping("/login")
    @Transactional
    public ResponseEntity<?> login(@Valid @RequestBody LoginEntity login) {
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

        return new ResponseEntity<>(
                new TokenEntity(
                        user.getId(),
                        accessToken,
                        refreshToken
                ),
                HttpStatus.OK
        );
    }

    @PostMapping("/signup")
    @Transactional
    public ResponseEntity<?> signup(@Valid @RequestBody SignupEntity signup) {
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

        return new ResponseEntity<>(
                new TokenEntity(
                        user.getId(),
                        accessToken,
                        refreshToken
                ),
                HttpStatus.OK
        );
    }
}
