package com.example.backend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationDTO {
    private String name;
    private String lastName;
    private String email;
    private String phoneNumber;
    private long jobOfferId;
}
