package com.example.backend.domain.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Application {
    @Id
    private long Id;
    private String Name;
    private String LastName;
    private String Email;
    private String PhoneNumber;

    public Application(long id, String name, String lastName, String email, String phoneNumber) {
        Id = id;
        Name = name;
        LastName = lastName;
        Email = email;
        PhoneNumber = phoneNumber;
    }

    public Application() {

    }

    // CV FILE DO LATER
}
