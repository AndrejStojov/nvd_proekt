package com.example.backend.service;

import com.example.backend.domain.models.User;
import com.example.backend.domain.models.enumerations.Role;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService  extends UserDetailsService {

    User register(String username, String password, String repeatPassword, String name, String surname, Role role);

}
