import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Applications from "../Applications/ApplicationList/applications";
import Companies from "../Companies/CompanyList/companies";
import JobOffers from "../Job-Offers/JobOfferList/joboffers";
import Header from "../Header/header";
import AppService from "../../repository/appRepository";
import CompanyAdd from "../Companies/CompanyAdd/companyAdd";
import CompanyEdit from "../Companies/CompanyEdit/companyEdit";
import ApplicationAdd from "../Applications/ApplicationAdd/applicationAdd";
import JobOfferEdit from "../Job-Offers/JobOfferEdit/jobofferEdit";
import JobOfferAdd from "../Job-Offers/JobOfferAdd/jobofferAdd";
import ApplicationEdit from "../Applications/ApplicationEdit/ApplicationEdit";
import ChatBot from "../ChatBot/chatbot";
import Login from "../Login/login";
import Register from "../Register/register"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applications: [],
            joboffers: [],
            companies: [],
            selectedApplication: null,
            selectedCompany: null,
            selectedJobOffer: null,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.loadApplications();
        this.loadCompanies();
        this.loadJobOffers();
    };

    loadApplications = () => {
        AppService.fetchApplications()
            .then((data) => {
                this.setState({ applications: data.data });
            })
            .catch((error) => console.error("Error fetching applications:", error));
    };

    loadCompanies = () => {
       //how to get access token
        console.log( JSON.parse(localStorage.getItem("user")).access_token)
        AppService.fetchCompanies()
            .then((data) => {
                this.setState({ companies: data.data });
            })
            .catch((error) => console.error("Error fetching companies:", error));
    };

    loadJobOffers = () => {
        AppService.fetchJobOffers()
            .then((data) => {
                this.setState({ joboffers: data.data });
            })
            .catch((error) => console.error("Error fetching job offers:", error));
    };

    deleteApplication = (id) => {
        AppService.deleteApplication(id)
            .then(() => {
                this.loadApplications();
            })
            .catch((error) => console.error("Error deleting application:", error));
    };

    addApplication = (name, lastName, email, phoneNumber) => {
        AppService.addApplication(name, lastName, email, phoneNumber)
            .then(() => {
                this.loadApplications();
            })
            .catch((error) => console.error("Error adding application:", error));
    };

    updateApplication = (id, name, lastName, email, phoneNumber) => {
        AppService.updateApplication(id, name, lastName, email, phoneNumber)
            .then(() => {
                this.loadApplications();
            })
            .catch((error) => console.error("Error updating application:", error));
    };

    getApplication = (id) => {
        AppService.getApplication(id)
            .then((data) => {
                this.setState({
                    selectedApplication: data.data,
                });
            })
            .catch((error) => console.error("Error fetching application:", error));
    };

    deleteCompany = (id) => {
        AppService.deleteCompany(id)
            .then(() => {
                this.loadCompanies();
            })
            .catch((error) => console.error("Error deleting company:", error));
    };

    addCompany = (name, description, location, address, logo, webSite) => {
        AppService.addCompany(name, description, location, address, logo, webSite)
            .then(() => {
                this.loadCompanies();
            })
            .catch((error) => console.error("Error adding company:", error));
    };

    updateCompany = (id, name, description, location, address, logo, webSite) => {
        AppService.updateCompany(id, name, description, location, address, logo, webSite)
            .then(() => {
                this.loadCompanies();
            })
            .catch((error) => console.error("Error updating company:", error));
    };

    getCompany = (id) => {
        AppService.getCompany(id)
            .then((data) => {
                this.setState({
                    selectedCompany: data.data,
                });
            })
            .catch((error) => console.error("Error fetching company:", error));
    };

    deleteJobOffer = (id) => {
        AppService.deleteJobOffer(id)
            .then(() => {
                this.loadJobOffers();
            })
            .catch((error) => console.error("Error deleting job offer:", error));
    };

    addJobOffer = (id, position, details, startingDate, endingDate, location, company) => {
        AppService.addJobOffer(id, position, details, startingDate, endingDate, location, company)
            .then(() => {
                this.loadJobOffers();
            })
            .catch((error) => console.error("Error adding job offer:", error));
    };

    updateJobOffer = (id, position, details, startingDate, endingDate, location, company) => {
        AppService.updateJobOffer(id, position, details, startingDate, endingDate, location, company)
            .then(() => {
                this.loadJobOffers();
            })
            .catch((error) => console.error("Error updating job offer:", error));
    };

    getJobOffer = (id) => {
        AppService.getJobOffer(id)
            .then((data) => {
                this.setState({
                    selectedJobOffer: data.data,
                });
            })
            .catch((error) => console.error("Error fetching job offer:", error));
    };

    render() {
        return (
            <Router>
                <Header />
                <main>
                    <div className="container">
                        <Routes>
                            <Route
                                path="/applications"
                                element={<Applications
                                    applications={this.state.applications}
                                    onDelete={this.deleteApplication}
                                    onEdit={this.getApplication}/>}
                            />
                            <Route
                                path="/applications/add"
                                element={<ApplicationAdd onAddApplication={this.addApplication} />}
                            />
                            <Route
                                path="/applications/edit/:id"
                                element={
                                    <ApplicationEdit
                                        onEditApplication={this.updateApplication}
                                        application={this.state.selectedApplication}
                                    />
                                }
                            />

                            <Route path="/companies" element={<Companies
                                companies={this.state.companies}
                                onDelete={this.deleteCompany} //ovaa dodadov ako treba delete
                                onEdit={this.getCompany}   //ovaa dodadov ako treba edit
                            />} />
                            <Route
                                path="/companies/add"
                                element={<CompanyAdd onAddCompany={this.addCompany} />}
                            />
                            <Route
                                path="/companies/edit/:id"
                                element={
                                    <CompanyEdit
                                        onEditCompany={this.updateCompany}
                                        company={this.state.selectedCompany}
                                    />
                                }
                            />

                            <Route path="/joboffers" element={<JobOffers
                                joboffers={this.state.joboffers}
                                onEdit={this.getJobOffer}
                                onDelete={this.deleteJobOffer}
                                />}
                                />
                            <Route
                                path="/joboffers/add"
                                element={<JobOfferAdd companies={this.state.companies} onAddJobOffer={this.addJobOffer} />}
                            />
                            <Route
                                path="/joboffers/edit/:id"
                                element={
                                    <JobOfferEdit
                                        companies={this.state.companies}
                                        onEditJobOffer={this.updateJobOffer}
                                        joboffer={this.state.selectedJobOffer}
                                        applications={this.state.applications} //valjda ova isto treba???
                                    />
                                }
                            />
                            <Route path="/chat" element={<ChatBot></ChatBot>} />
                            <Route path="/" element={<Navigate to="/joboffers" />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </div>
                </main>
            </Router>
        );
    }
}

export default App;
