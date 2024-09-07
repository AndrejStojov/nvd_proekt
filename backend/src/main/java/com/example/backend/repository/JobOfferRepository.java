package com.example.backend.repository;

import com.example.backend.domain.models.Company;
import com.example.backend.domain.models.JobOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobOfferRepository extends JpaRepository<JobOffer,Long> {
    JobOffer findByPositionEqualsAndCompanyEquals(String position,Company company);
    List<JobOffer> findByPositionContaining(String position);
}
