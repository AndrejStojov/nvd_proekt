package com.example.backend.service;

import com.example.backend.domain.models.Company;

import java.util.List;
import java.util.Optional;

public interface CompanyService {
    Optional<Company> findById(long id);
    List<Company> findAll();
   // Optional<Company> save(long id, String name, String description, String location, String address, String logo, String webSite);
    Company create(String name, String description, String location, String address, String logo, String webSite);
    Company update(long id, String name, String description, String location, String adress, String logo, String webSite);
    void deleteById(long id);
    //boolean companyNameExists(String name);

}
