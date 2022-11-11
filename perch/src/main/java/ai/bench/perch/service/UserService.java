package ai.bench.perch.service;

import ai.bench.perch.model.User;
import ai.bench.perch.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return this.userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(
                        String.format("Username: %s was not found", username)));
    }

    public User findById(String id) {
        return this.userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException(
                        String.format("User with id: %s was not found", id)));
    }
}
