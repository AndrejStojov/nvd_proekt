import axios from '../custom-axios/axios';

const AppService = {
    fetchApplications: () => {
        return axios.get("/applications");
    },
    addApplication: (name, lastName, email, phoneNumber) =>{
        return axios.post("/applications/add",{
            "name" : name,
            "lastName" : lastName,
            "email" : email,
            "phoneNumber" : phoneNumber
        });
    },
    updateApplication: (id, name, lastName, email, phoneNumber) => {
        return axios.put(`/applications/edit/${id}`, {
            "name" : name,
            "lastName" : lastName,
            "email" : email,
            "phoneNumber" : phoneNumber
        });
    },
    deleteApplication: (id) => {
        return axios.delete(`/applications/delete/${id}`);
    },
    getApplication:(id)=>{
        return axios.get(`/applications/${id}`);
    },

    fetchCompanies: () => {
        return axios.get("/companies");
    },
    addCompany: (name, description, location, address, logo, webSite) => {
        return axios.post("/companies/add", {
            "name" : name,
            "description" : description,
            "location" : location,
            "address" : address,
            "logo" : logo,
            "webSite" : webSite
        });
    },
    updateCompany: (id, name, description, location, address, logo, webSite) => {
        return axios.post(`/companies/edit/${id}`, {
            "name" : name,
            "description" : description,
            "location" : location,
            "address" : address,
            "logo" : logo,
            "webSite" : webSite
        });
    },
    deleteCompany: (id) => {
        return axios.delete(`/companies/delete/${id}`);
    },
    getCompanies:(id)=>{
        return axios.get(`/companies/${id}`);
    },

    fetchJobOffers: () => {
        return axios.get("/joboffers");
    },
    addJobOffer: (position, details, startingDate, endingDate, location, company) => {
        return axios.post("/joboffers/add", {
            "position" : position,
            "details" : details,
            "startingDate" : startingDate,
            "endingDate" : endingDate,
            "location" : location,
            "company" : company
        });
    },
    updateJobOffer: (id, position, details, startingDate, endingDate, location, company) => {
        return axios.post(`/joboffers/edit/${id}`, {
            "position" : position,
            "details" : details,
            "startingDate" : startingDate,
            "endingDate" : endingDate,
            "location" : location,
            "company" : company
        });
    },
    deleteJobOffer: (id) => {
        return axios.delete(`/joboffers/delete/${id}`);
    },

    getJobOffers:(id)=>{
        return axios.get(`/joboffers/${id}`);
    }

};

export default AppService;