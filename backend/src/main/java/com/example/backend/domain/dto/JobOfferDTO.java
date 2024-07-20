package com.example.backend.domain.dto;

import com.example.backend.domain.models.Application;
import com.example.backend.domain.models.Company;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobOfferDTO {
    private String position;
    private String details;
    private LocalDate startingDate;
    private LocalDate endingDate;
    private String location;
    private long company;

}
