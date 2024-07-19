package com.example.backend.repository;

import com.example.backend.domain.models.JobOffer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobOfferRepository extends JpaRepository<JobOffer,Long> {
}
