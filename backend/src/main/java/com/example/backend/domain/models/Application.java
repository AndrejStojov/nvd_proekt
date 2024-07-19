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

    // CV FILE DO LATER
}
