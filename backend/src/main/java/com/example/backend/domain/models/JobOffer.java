package com.example.backend.domain.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class JobOffer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String position;
    @Column(length = 1500)
    private String details;
    private LocalDate startingDate;
    private LocalDate endingDate;
    private String location;
    @ManyToOne
    private Company company;

    @OneToMany(fetch = FetchType.EAGER)
    private List<Application> applicationList;

    public JobOffer( String position, String details, LocalDate startingDate, LocalDate endingDate, String location, Company company) {

        this.position = position;
        this.details = details;
        this.startingDate = startingDate;
        this.endingDate = endingDate;
        this.location = location;
        this.company = company;
        applicationList=new ArrayList<>();
    }

    public JobOffer() {

    }
}