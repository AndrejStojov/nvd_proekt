package com.example.backend.domain.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String Name;
    private String Description;
    private String Location;
    private String Adress;
    private String Logo;
    private String WebSite;

    public Company(long id, String name, String description, String location, String adress, String logo, String webSite) {
        Id = id;
        Name = name;
        Description = description;
        Location = location;
        Adress = adress;
        Logo = logo;
        WebSite = webSite;
    }

    public Company() {

    }
}
