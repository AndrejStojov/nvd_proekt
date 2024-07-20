package com.example.backend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyDTO {
    private String name;
    private String description;
    private String location;
    private String address;
    private String logo;
    private String webSite;
}
