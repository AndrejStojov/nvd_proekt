package com.example.backend.jobs;

import com.example.backend.service.CompanyService;
import com.example.backend.service.JobOfferService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;


@Component
public class WebScrapper {
    private final CompanyService companyService;
    private final JobOfferService jobOfferService;


    public WebScrapper(CompanyService companyService, JobOfferService jobOfferService) {
        this.companyService = companyService;
        this.jobOfferService = jobOfferService;


    }
    @Scheduled(fixedDelay = 600000)
    public void scrapeForOffers() {

    }
}
