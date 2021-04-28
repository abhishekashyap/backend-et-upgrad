package com.backend.endterm.controller;

import com.backend.endterm.model.User;
import com.backend.endterm.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @PostMapping("/addUser")
    public User storeUser(@RequestBody User aUser) {
        return userService.save(aUser);
    }

    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
    }
}
