package com.example.backend.domain.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String Name;
    private String LastName;
    private String Email;
    private String PhoneNumber;

    public Application( String name, String lastName, String email, String phoneNumber) {

        Name = name;
        LastName = lastName;
        Email = email;
        PhoneNumber = phoneNumber;
    }

    public Application() {

    }

    // CV FILE DO LATER
}
