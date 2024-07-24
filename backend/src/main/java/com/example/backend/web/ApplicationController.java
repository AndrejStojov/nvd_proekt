package com.example.backend.web;

import com.example.backend.domain.dto.ApplicationDTO;
import com.example.backend.domain.models.Application;
import com.example.backend.service.ApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api/applications")
public class ApplicationController {
    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService){
        this.applicationService=applicationService;
    }

    @GetMapping()
    public List<Application> listAllApplications(){
        return applicationService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Application> findApplicationById(@PathVariable long id){
        return this.applicationService.findById(id)
                .map(application -> ResponseEntity.ok().body(application))
                .orElseGet(()->ResponseEntity.notFound().build());
    }
    @PostMapping("/edit/{id}")
    public void updateApplication(@PathVariable long id, @RequestBody ApplicationDTO applicationDTO){
        applicationService.update(id, applicationDTO.getName(),applicationDTO.getLastName(), applicationDTO.getEmail(), applicationDTO.getPhoneNumber());
    }

    @PostMapping("/add")
    public void addNewApplication(@RequestBody ApplicationDTO applicationDTO){
        applicationService.create(applicationDTO.getName(), applicationDTO.getLastName(), applicationDTO.getEmail(), applicationDTO.getPhoneNumber(), applicationDTO.getJobOfferId());
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.applicationService.deleteById(id);
        if (this.applicationService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

}
