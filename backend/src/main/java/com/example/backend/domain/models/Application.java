package com.example.backend.domain.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String name;
    private String lastName;
    private String email;
    private String phoneNumber;
    @Lob
    private byte[] cvFile;
    public Application( String name, String lastName, String email, String phoneNumber) {

        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    public Application() {

    }

    // CV FILE DO LATER
}
