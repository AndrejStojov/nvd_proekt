package com.example.backend.service;

import com.example.backend.domain.models.Application;
import com.example.backend.domain.models.Company;
import com.example.backend.domain.models.JobOffer;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface JobOfferService {
    Optional<JobOffer> findById(long id);
    List<JobOffer> findAll();
    JobOffer create(String position, String details, LocalDate startingDate, LocalDate endingDate, String location, Long companyId);
    JobOffer update(long id, String position, String details, LocalDate startingDate, LocalDate endingDate, String location, Long companyId);
    void deleteById(long id);

    List<Application> getApplicationsForJobOffer(Long jobOfferId);

   // boolean jobOfferExists(String position,String CompanyName);
}
