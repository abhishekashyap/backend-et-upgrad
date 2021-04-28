package com.backend.endterm.service;

import com.backend.endterm.model.User;
import com.backend.endterm.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User save(User aUser) {
        return userRepository.save(aUser);
    }

    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}

