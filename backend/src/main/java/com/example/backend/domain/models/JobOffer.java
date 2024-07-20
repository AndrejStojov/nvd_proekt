package com.example.backend.domain.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class JobOffer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String Position;
    private String Details;
    private LocalDate StartingDate;
    private LocalDate EndingDate;
    private String Location;
    @ManyToOne
    private Company company;

    @OneToMany(fetch = FetchType.EAGER)
    private List<Application> applicationList;

    public JobOffer( String position, String details, LocalDate startingDate, LocalDate endingDate, String location, Company company) {

        Position = position;
        Details = details;
        StartingDate = startingDate;
        EndingDate = endingDate;
        Location = location;
        this.company = company;
    }

    public JobOffer() {

    }
}