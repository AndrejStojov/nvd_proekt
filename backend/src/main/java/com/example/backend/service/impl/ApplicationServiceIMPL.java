package com.example.backend.service.impl;

import com.example.backend.domain.models.Application;
import com.example.backend.domain.models.JobOffer;
import com.example.backend.domain.models.excepitons.InvalidJobOfferIdException;
import com.example.backend.repository.ApplicationRepository;
import com.example.backend.repository.JobOfferRepository;
import com.example.backend.service.ApplicationService;
import com.example.backend.domain.models.excepitons.InvalidApplicationIdException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationServiceIMPL implements ApplicationService {
    private final ApplicationRepository applicationRepository;
    private final JobOfferRepository jobOfferRepository;

    public ApplicationServiceIMPL(ApplicationRepository applicationRepository, JobOfferRepository jobOfferRepository){
        this.applicationRepository = applicationRepository;
        this.jobOfferRepository = jobOfferRepository;
    }
    @Override
    public List<Application> findAll() {
        return this.applicationRepository.findAll();
    }

    @Override
    public Optional<Application> findById(long id) {
        return this.applicationRepository.findById(id);
    }

//    @Override
//    public Optional<Application> save(long id, String name, String lastName, String email, String phoneNumber) {
//        return Optional.of(this.applicationRepository.save(new Application(Id, Name, LastName, Email, PhoneNumber)));
//    }

    @Override
    public Application update(long id, String name, String lastName, String email, String phoneNumber) {
        Application application = applicationRepository.findById(id).orElseThrow(InvalidApplicationIdException::new);
        application.setName(name);
        application.setLastName(lastName);
        application.setEmail(email);
        application.setPhoneNumber(phoneNumber);

        return applicationRepository.save(application);
    }

    @Override
    public Application create(String name, String lastName, String email, String phoneNumber,long jobOfferId) {
        Application application = new Application(name, lastName, email, phoneNumber);
        applicationRepository.save(application);
        JobOffer joboffer=jobOfferRepository.findById(jobOfferId).orElseThrow(InvalidJobOfferIdException::new);
        joboffer.getApplicationList().add(application);
        return application;
    }

    @Override
    public void deleteById(long id) {
       this.applicationRepository.deleteById(id);
    }

    @Override
    public Application saveApplication(Application application) {
         return applicationRepository.save(application);
    }
}
