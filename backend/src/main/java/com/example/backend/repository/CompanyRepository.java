package com.example.backend.repository;

import com.example.backend.domain.models.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company,Long> {
    //Company findByName(String name);
}
