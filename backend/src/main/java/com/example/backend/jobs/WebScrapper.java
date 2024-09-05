package com.example.backend.jobs;

import com.example.backend.domain.dto.ChatDTO;
import com.example.backend.domain.models.Company;
import com.example.backend.domain.models.JobOffer;
import com.example.backend.service.CompanyService;
import com.example.backend.service.JobOfferService;
import jakarta.persistence.ManyToOne;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDate;


@Component
public class WebScrapper {
    private final CompanyService companyService;
    private final JobOfferService jobOfferService;
    private OllamaChatModel chatModel;


    public WebScrapper(CompanyService companyService, JobOfferService jobOfferService, OllamaChatModel chatModel) {
        this.companyService = companyService;
        this.jobOfferService = jobOfferService;


        this.chatModel = chatModel;
    }
    @Scheduled(cron = "0 0 12 * * ?")
    public void scrapeForOffers() {
        String url = "https://kariera.mk/search?city=-1&occupation=4&s=";
        try{
            Document doc = Jsoup.connect(url)
                    .get();
            Elements offers=doc.select(".right-jobs.search li");
            for(Element offer : offers){
                if(offer.attr("class").equals("deactivated-job")){
                    break;
                }
                String detailsurl = offer.select("a").attr("href");

                Document detailedDoc= Jsoup.connect("https://kariera.mk"+detailsurl).get();
// get company info

                String companyurl= detailedDoc.select("h2 a").attr("href");

                Document companyDoc= Jsoup.connect("https://kariera.mk"+companyurl).get();


                String companyName= companyDoc.select("h2").text();
                String compantDetails=companyDoc.select(".job-desc").text();
                String logourl="https://kariera.mk"+companyDoc.select(".job-img img").attr("src");
                Elements details= companyDoc.select("address div");
                String website="";
                for(Element e : details){
                    if(e.text().contains("Веб:")){
                        website=e.select("a").attr("href");
                    }
                }
                String address="";
                for(Element e : details){
                    if(e.text().contains("Адреса:")){
                        address=e.text().replace("Адреса:","").trim();
                    }
                }
                String city="";
                for(Element e : details){
                    if(e.text().contains("Град:")){
                        city=e.text().replace("Град:","").trim();
                    }
                }
                if(companyService.findByName(companyName)==null){
                    Company c=companyService.create(companyName,compantDetails,city,address,logourl,website);
                    System.out.println(c);
                }



//get job offer info

//                private long Id;
//                private String position;
//                private String details;
//                private LocalDate startingDate;
//                private LocalDate endingDate;
//                private String location;
//                @ManyToOne
//                private Company company;
                String position= detailedDoc.select("h2 a").text();
                LocalDate startindate=LocalDate.now();
                Elements jobDetails = detailedDoc.select(".details li");
                String date="";
                for(Element e : jobDetails){
                    if(e.text().contains("Активен до")){
                        date=e.text().replace("Активен до","").trim();
                    }
                }
                String[] splitdate=date.split("\\.");
                LocalDate endingDate=LocalDate.parse(splitdate[2]+"-"+splitdate[1]+"-"+splitdate[0]);

                String jobLocation="";
                for(Element e : jobDetails){
                    if(e.text().contains("Локација:")){
                        jobLocation=e.text().replace("Локација:","").trim();
                    }
                }

                String jobDescription = detailedDoc.select(".job-desc").text();
                if(jobOfferService.findByNameAndCompany(position,companyName)==null){
                    Company c = companyService.findByName(companyName);
                    JobOffer jo= jobOfferService.create(position,jobDescription,startindate,endingDate,jobLocation,c.getId());
                    System.out.println(jo);
                }

                System.out.println();


            }

        }
        catch(IOException e){
            e.printStackTrace();
        }

    }
}
