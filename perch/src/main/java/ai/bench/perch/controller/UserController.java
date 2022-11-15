package ai.bench.perch.controller;

import ai.bench.perch.model.User;
import ai.bench.perch.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/currentUser")
    public ResponseEntity<User> getCurrentUser(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user);
    }

    @GetMapping(value = "/{id}")
    @PreAuthorize("#user.id == #id")
    public ResponseEntity<User> getUserById(@AuthenticationPrincipal User user, @PathVariable("id") String id) {
        return ResponseEntity.ok(userRepository.findById(id).get());
    }
}
