package com.example.backend.web;

import com.example.backend.domain.dto.CompanyDTO;
import com.example.backend.domain.models.Company;
import com.example.backend.service.CompanyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api/company")
public class CompanyController {
    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Company> findCompanyById(@PathVariable long id){
        return this.companyService.findById(id)
                .map(company -> ResponseEntity.ok().body(company))
                .orElseGet(()->ResponseEntity.notFound().build());
    }

    @GetMapping("/")
    public List<Company> listAllCompanies(){
        return companyService.findAll();
    }
    @PostMapping("/add")
    public void addNewCompany(@RequestBody CompanyDTO company){
        System.out.println(company);
        companyService.create(company.getName(),company.getDescription(),company.getLocation(),company.getAddress(),company.getLogo(),company.getWebSite());
    }
    @PostMapping("/edit/{id}")
    public void updateCompany(@PathVariable long id, @RequestBody CompanyDTO companyDTO){
        companyService.update(id , companyDTO.getName(), companyDTO.getDescription(), companyDTO.getLocation(), companyDTO.getAddress(), companyDTO.getLogo(), companyDTO.getWebSite());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable long id) {
        this.companyService.deleteById(id);
        if (this.companyService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }


}
