package com.example.backend.service;

import com.example.backend.domain.models.User;

public interface AuthService {
    User login(String username, String password);


}
