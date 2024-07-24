package com.example.backend.jobs;

import com.example.backend.service.CompanyService;
import com.example.backend.service.JobOfferService;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.lang.annotation.Documented;

@Component
public class WebScrapper {
    private final CompanyService companyService;
    private final JobOfferService jobOfferService;

    public WebScrapper(CompanyService companyService, JobOfferService jobOfferService) {
        this.companyService = companyService;
        this.jobOfferService = jobOfferService;
    }
    @Scheduled(fixedDelay = 5000)
    public void scrapeForOffers(){
        String url = "https://kariera.mk/search?city=-1&occupation=4&s=";
        try {
            Document document= Jsoup.connect(url).get();
             Elements ul =document.select(".right-jobs");
            for(Element li : ul.select("li")){
                String offerurl="https://kariera.mk"+li.select("a").get(0).attr("href");
                Document offerPage= Jsoup.connect(offerurl).get();
                String title;

            }


        }catch (IOException e){
            e.printStackTrace();
        }

    }
}
