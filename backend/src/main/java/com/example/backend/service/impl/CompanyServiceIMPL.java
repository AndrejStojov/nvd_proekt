package com.example.backend.service.impl;

import com.example.backend.domain.models.Company;
import com.example.backend.repository.CompanyRepository;
import com.example.backend.service.CompanyService;
import com.example.backend.domain.models.excepitons.InvalidCompanyIdException;
import java.util.List;
import java.util.Optional;

public class CompanyServiceIMPL implements CompanyService {
    private final CompanyRepository companyRepository;

    public CompanyServiceIMPL(CompanyRepository companyRepository){
        this.companyRepository = companyRepository;
    }
    @Override
    public Optional<Company> findById(long id) {
        return this.companyRepository.findById(id);
    }

    @Override
    public List<Company> findAll() {
        return this.companyRepository.findAll();
    }

    @Override
    public Company create( String name, String description, String location, String address, String logo, String webSite) {
        Company company = new Company( name, description, location, address, logo, webSite);
        return companyRepository.save(company);
    }

    @Override
    public Company update(long id, String name, String description, String location, String adress, String logo, String webSite) {
       Company company = companyRepository.findById(id).orElseThrow(InvalidCompanyIdException::new);
       company.setName(name);
       company.setDescription(description);
       company.setLocation(location);
       company.setAddress(adress);
       company.setLogo(logo);
       company.setWebSite(webSite);

       return companyRepository.save(company);
    }

    @Override
    public void deleteById(long id) {
        this.companyRepository.deleteById(id);;
    }
}
