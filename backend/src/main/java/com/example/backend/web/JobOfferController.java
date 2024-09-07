package com.example.backend.web;


import com.example.backend.domain.dto.JobOfferDTO;
import com.example.backend.domain.models.JobOffer;
import com.example.backend.service.JobOfferService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api/joboffers")
public class JobOfferController {
    private final JobOfferService jobOfferService;

    public JobOfferController(JobOfferService jobOfferService){
        this.jobOfferService=jobOfferService;
    }

    @GetMapping()
    public List<JobOffer> listAllJobOffers(@RequestParam(required = false) String name){
        if(name!=null){
            return jobOfferService.filter(name);
        }

        return jobOfferService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobOffer> findJobOfferById(@PathVariable long id){
        return this.jobOfferService.findById(id)
                .map(jobOffer -> ResponseEntity.ok().body(jobOffer))
                .orElseGet(()->ResponseEntity.notFound().build());
    }
    @PostMapping("/edit/{id}")
    public void updateJobOffer(@PathVariable long id, @RequestBody JobOfferDTO jobOfferDTO){
        jobOfferService.update(id, jobOfferDTO.getPosition(), jobOfferDTO.getDetails(), jobOfferDTO.getStartingDate(), jobOfferDTO.getEndingDate(), jobOfferDTO.getLocation(), jobOfferDTO.getCompany());

    }

    @PostMapping("/add")
    public void addNewJobOffer(@RequestBody JobOfferDTO jobOfferDTO){
        jobOfferService.create(jobOfferDTO.getPosition(), jobOfferDTO.getDetails(), jobOfferDTO.getStartingDate(), jobOfferDTO.getEndingDate(), jobOfferDTO.getLocation(), jobOfferDTO.getCompany());
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.jobOfferService.deleteById(id);
        if (this.jobOfferService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }
}
