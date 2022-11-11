package ai.bench.perch.controller;

import ai.bench.perch.entity.UserEntity;
import ai.bench.perch.model.User;
import ai.bench.perch.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {

    @Autowired
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") String id) {
        Optional<User> userData = this.userRepository.findById(id);

        if (userData.isPresent()) {
            return new ResponseEntity<>(userData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

//    @PostMapping(value = "/create")
//    public ResponseEntity<User> createUser(@RequestBody UserEntity userEntity) {
//
//        User user = new User();
//
//        return new ResponseEntity<>(this.userRepository.save(user), HttpStatus.CREATED);
//    }
}
