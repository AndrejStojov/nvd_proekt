package com.example.backend.service;

import com.example.backend.domain.models.Application;

import java.util.List;
import java.util.Optional;

public interface ApplicationService {
    List<Application> findAll();
    Optional<Application> findById(long id);
    //Optional<Application> findByName(String name);
  //  Optional<Application> save(long id, String name, String lastName, String email, String phoneNumber);

    //Optional<Application> save(ApplicationDto applicationDto);
    Application update(long id, String name, String lastName, String email, String phoneNumber);
    Application create(String name, String lastName, String email, String phoneNumber,long jobOfferId);

    //Optional<Application> edit(ApplicationDto applicationDto);
    void deleteById(long id);


}
