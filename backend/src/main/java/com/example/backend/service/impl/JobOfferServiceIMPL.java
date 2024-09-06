package com.example.backend.service.impl;

import com.example.backend.domain.models.Application;
import com.example.backend.domain.models.Company;
import com.example.backend.domain.models.JobOffer;
import com.example.backend.domain.models.excepitons.InvalidCompanyIdException;
import com.example.backend.domain.models.excepitons.InvalidJobOfferIdException;
import com.example.backend.repository.CompanyRepository;
import com.example.backend.repository.JobOfferRepository;
import com.example.backend.service.JobOfferService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
@Service
public class JobOfferServiceIMPL implements JobOfferService {

    private final JobOfferRepository jobOfferRepository;
    private final CompanyRepository companyRepository;

    public JobOfferServiceIMPL(JobOfferRepository jobOfferRepository, CompanyRepository companyRepository){
        this.jobOfferRepository = jobOfferRepository;
        this.companyRepository = companyRepository;
    }
    @Override
    public Optional<JobOffer> findById(long id) {
        return jobOfferRepository.findById(id);
    }

    @Override
    public List<JobOffer> findAll() {
        return jobOfferRepository.findAll();
    }

    @Override
    public JobOffer create(String position, String details, LocalDate startingDate, LocalDate endingDate, String location, Long companyId) {
        JobOffer jobOffer = new JobOffer(position, details, startingDate, endingDate, location, companyRepository.findById(companyId).orElseThrow(InvalidCompanyIdException::new));

        return jobOfferRepository.save(jobOffer);
    }

    @Override
    public JobOffer update(long id, String position, String details, LocalDate startingDate, LocalDate endingDate, String location, Long companyId) {
        JobOffer jobOffer = jobOfferRepository.findById(id).orElseThrow(InvalidJobOfferIdException::new);
        jobOffer.setPosition(position);
        jobOffer.setStartingDate(startingDate);
        jobOffer.setEndingDate(endingDate);
        jobOffer.setLocation(location);
        jobOffer.setCompany(companyRepository.findById(companyId).orElseThrow(InvalidCompanyIdException::new));

        return jobOfferRepository.save(jobOffer);
    }

    @Override
    public void deleteById(long id) {
        this.jobOfferRepository.deleteById(id);
    }

    @Override
    public List<Application> getApplicationsForJobOffer(Long jobOfferId) {
        JobOffer jobOffer = jobOfferRepository.findById(jobOfferId).orElseThrow(InvalidJobOfferIdException::new);
        return jobOffer.getApplicationList();
    }

    @Override
    public JobOffer findByNameAndCompany(String position, String CompanyName) {
        Company c = companyRepository.findByNameEquals(CompanyName);
        return jobOfferRepository.findByPositionEqualsAndCompanyEquals(position,c);
    }

    @Override
    public JobOffer saveJobOffer(JobOffer jobOffer) {
        return jobOfferRepository.save(jobOffer);
    }

//    @Override
//    public boolean jobOfferExists(String position, String CompanyName) {
//        if(jobOfferRepository.findByPositionAndCompany(position,companyRepository.findByName(CompanyName))!=null){
//            return true;
//        }
//        return false;
//    }
}
