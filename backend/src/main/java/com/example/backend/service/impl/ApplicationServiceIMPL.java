package com.example.backend.service.impl;

import com.example.backend.domain.models.Application;
import com.example.backend.repository.ApplicationRepository;
import com.example.backend.service.ApplicationService;
import com.example.backend.domain.models.excepitons.InvalidApplicationIdException;

import java.util.List;
import java.util.Optional;

public class ApplicationServiceIMPL implements ApplicationService {
    private final ApplicationRepository applicationRepository;

    public ApplicationServiceIMPL(ApplicationRepository applicationRepository){
        this.applicationRepository = applicationRepository;
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
    public Application create(long id, String name, String lastName, String email, String phoneNumber) {
        Application application = new Application(id, name, lastName, email, phoneNumber);
        return applicationRepository.save(application);
    }

    @Override
    public void deleteById(long id) {
       this.applicationRepository.deleteById(id);
    }
}
