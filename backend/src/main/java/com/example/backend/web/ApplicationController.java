package com.example.backend.web;

import com.example.backend.domain.dto.ApplicationDTO;
import com.example.backend.domain.models.Application;
import com.example.backend.domain.models.JobOffer;
import com.example.backend.service.ApplicationService;
import com.example.backend.service.JobOfferService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api/applications")
public class ApplicationController {
    private final ApplicationService applicationService;
    private final JobOfferService jobOfferService;

    public ApplicationController(ApplicationService applicationService, JobOfferService jobOfferService){
        this.applicationService=applicationService;
        this.jobOfferService = jobOfferService;
    }

    @PostMapping("/apply")
    public ResponseEntity<String> apply(
            @RequestParam("jobOfferId") long jobOfferId,
            @RequestParam("name") String name,
            @RequestParam("lastName") String lastName,
            @RequestParam("email") String email,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("cvFile") MultipartFile cvFile) {

        try {
            // Find the job offer to which the application is being made
            Optional<JobOffer> jobOfferOptional = jobOfferService.findById(jobOfferId );
            if (jobOfferOptional.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Job offer not found");
            }

            // Create and save the application
            Application application = new Application(name, lastName, email, phoneNumber);
            application.setCvFile(cvFile.getBytes()); // Save the uploaded PDF as a byte array
            applicationService.saveApplication(application);

            // Add application to the job offer's application list
            JobOffer jobOffer = jobOfferOptional.get();
            jobOffer.getApplicationList().add(application);
            jobOfferService.saveJobOffer(jobOffer);

            return ResponseEntity.ok("Application submitted successfully");

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing file");
        }
    }
    @GetMapping("/download/{applicationId}")
    public ResponseEntity<byte[]> downloadCvFile(@PathVariable long applicationId) {
        Optional<Application> applicationOptional = applicationService.findById(applicationId);

        if (applicationOptional.isPresent()) {
            Application application = applicationOptional.get();
            byte[] fileData = application.getCvFile();

            if (fileData != null) {
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_PDF);
                headers.setContentDispositionFormData("attachment", "cv_" + application.getId() + ".pdf");
                return new ResponseEntity<>(fileData, headers, HttpStatus.OK);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
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
