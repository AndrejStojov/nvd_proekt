package com.example.backend.domain.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor

public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String name;
    @Column(length = 1000)
    private String description;
    private String location;
    private String address;
    private String logo;
    private String webSite;

    public Company( String name, String description, String location, String address, String logo, String webSite) {

        this.name = name;
        this.description = description;
        this.location = location;
        this.address = address;
        this.logo = logo;
        this.webSite = webSite;
    }

    public Company() {

    }
}
