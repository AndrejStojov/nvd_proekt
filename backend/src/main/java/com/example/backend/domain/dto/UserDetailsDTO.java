package com.example.backend.domain.dto;

import com.example.backend.domain.models.User;
import com.example.backend.domain.models.enumerations.Role;
import lombok.Data;

@Data
public class UserDetailsDTO {
    private String username;
    private Role role;

    public static UserDetailsDTO of(User user) {
        UserDetailsDTO details = new UserDetailsDTO();
        details.username = user.getUsername();
        details.role = user.getRole();
        return details;
    }

}
