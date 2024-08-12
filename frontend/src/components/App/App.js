import logo from '../../logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Applications from "../Applications/applications";
import Companies from "../Companies/companies";
import JobOffers from "../Job-Offers/joboffers";
import Header from '../Header/header';
import AppService from "../../repository/appRepository";
import CompanyAdd from "../Companies/CompanyAdd/companyAdd";
import CompanyEdit from "../Companies/CompanyEdit/companyEdit";
import ApplicationAdd from "../Applications/ApplicationAdd/applicationAdd";
import JobOfferEdit from "../Job-Offers/JobOfferEdit/jobofferEdit";
import JobOfferAdd from "../Job-Offers/JobOfferAdd/jobofferAdd";
import ApplicationEdit from "../Applications/ApplicationEdit/ApplicationEdit";
import Joboffers from "../Job-Offers/JobOfferList/joboffers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
      joboffers: [],
      companies: [],
      //selectedProduct: {}
    }
  }
  render() {
    return (
        <Router>
          <Header/>
          <main>
            <div className="container">
                <Routes>
              <Route path={"/applications"} exact render={() =>
                  <Applications applications = {this.state.applications}/>}/>
              <Route path={"/applications/add"} exact render={() =>
                  <ApplicationAdd applications={this.state.applications}
                              onAddApplication={this.addApplication}/>}/>
              <Route path={"/applications/edit/:id"} exact render={() =>
                  <ApplicationEdit applications={this.state.applications}
                               onEditApplication={this.updateApplication}
                               application={this.state.selectedApplication}/>}/>
              <Route path={"/applications"} exact render={() =>
                  <Applications applications={this.state.applications}
                            onDelete={this.deleteApplication}
                            onEdit={this.getApplication}/>}/>
                    <Route path="/" element={<Navigate to="/applications"/>}/>

              <Route path={"/companies"} exact render={() =>
                  <Companies companies={this.state.companies}/>}/>
              <Route path={"/companies/add"} exact render={() =>
                  <CompanyAdd companies={this.state.companies}
                              onAddCompany={this.addCompany}/>}/>
              <Route path={"/companies/edit/:id"} exact render={() =>
                  <CompanyEdit companies={this.state.companies}
                               onEditCompany={this.updateCompany}
                               company={this.state.selectedCompany}/>}/>
              <Route path={"/companies"} exact render={() =>
                  <Companies companies={this.state.companies}
                            onDelete={this.deleteCompany}
                            onEdit={this.getCompany}/>}/>
                    <Route path="/" element={<Navigate to="/companies"/>}/>

              <Route path={"/joboffers"} exact render={() =>
                  <JobOffers joboffers={this.state.joboffers}/>}/>
              <Route path={"/joboffers/add"} exact render={() =>
                  <JobOfferAdd joboffers={this.state.joboffers}
                               companies = {this.state.companies}
                              onAddJobOffer={this.addJobOffer}/>}/>
              <Route path={"/joboffers/edit/:id"} exact render={() =>
                  <JobOfferEdit joboffers={this.state.joboffers}
                                companies = {this.state.companies}
                                onEditJobOffer={this.updateJobOffer}
                               joboffer={this.state.selectedJobOffer}/>}/>
              <Route path={"/joboffers"} exact render={() =>
                  <Joboffers joboffers={this.state.joboffers}
                            onDelete={this.deleteJobOffer}
                            onEdit={this.getJobOffer}/>}/>
                    <Route path="/" element={<Navigate to="/joboffers"/>}/>
                </Routes>
            </div>
          </main>
        </Router>
    );
  }
  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    this.loadApplications();
    this.loadCompanies();
    this.loadJobOffers();
  }

  loadApplications = () => {
    AppService.fetchApplications()
        .then((data) => {
          this.setState({
            applications : data.data
          })
        });
  }
  loadCompanies = () => {
    AppService.fetchCompanies()
        .then((data) => {
          this.setState({
            companies : data.data
          })
        });
  }

  loadJobOffers = () => {
    AppService.fetchJobOffers()
        .then((data) => {
          this.setState({
            joboffers : data.data
          })
        });
  }

  deleteApplication = (id) =>{
    AppService.deleteApplication(id)
        .then(()=>{
          this.loadApplications();
        });
  }

  addApplication = (name, lastName, email, phoneNumber)=>{
    AppService.addApplication(name,lastName,email,phoneNumber)
        .then(()=>{
          this.loadApplications();
        });
  }

  updateApplication = (id, name, lastName, email, phoneNumber) => {
    AppService.updateApplication(id, name, lastName, email, phoneNumber)
        .then(()=>{
          this.loadApplications();
        });
  }

  getApplication = (id) => {
    AppService.getApplication(id)
        .then((data) => {
          this.setState({
            selectedApplication : data.data
          })
        })
  }


  deleteCompany = (id) =>{
    AppService.deleteCompany(id)
        .then(()=>{
          this.loadCompanies();
        });
  }

  addCompany = (name, description, location, address, logo, webSite)=>{
    AppService.addCompany(name, description, location, address, logo, webSite)
        .then(()=>{
          this.loadCompanies();
        });
  }

  updateCompany= (id, name, description, location, address, logo, webSite) => {
    AppService.updateCompany(id, name, description, location, address, logo, webSite)
        .then(()=>{
          this.loadCompanies();
        });
  }

  getCompany = (id) => {
    AppService.getCompanies(id)
        .then((data) => {
          this.setState({
            selectedCompany : data.data
          })
        })
  }


  deleteJobOffer= (id) =>{
    AppService.deleteJobOffer(id)
        .then(()=>{
          this.loadJobOffers();
        });
  }

  addJobOffer = (id, position, details, startingDate, endingDate, location, company)=>{
    AppService.addJobOffer(id, position, details, startingDate, endingDate, location, company)
        .then(()=>{
          this.loadJobOffers();
        });
  }

  updateJobOffer= (id, position, details, startingDate, endingDate, location, company) => {
    AppService.updateJobOffer(id, position, details, startingDate, endingDate, location, company)
        .then(()=>{
          this.loadJobOffers();
        });
  }

  getJobOffer = (id) => {
    AppService.getJobOffers(id)
        .then((data) => {
          this.setState({
            selectedJobOffer : data.data
          })
        })
  }


}

export default App;

