import React from 'react';
import {useNavigate} from 'react-router-dom';

const CompanyAdd = (props) => {

    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        description: "",
        location: "",
        address: "",
        logo: "",
        website: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const description = formData.description;
        const location = formData.location;
        const address = formData.address;
        const logo = formData.logo;
        const website =formData.website;

        props.onAddCompany(name, description, location, address, logo, website);
        history("/companies");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Company name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter company name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text"
                               className="form-control"
                               id="description"
                               name="description"
                               placeholder="Description"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text"
                               className="form-control"
                               id="location"
                               name="location"
                               placeholder="Location"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text"
                               className="form-control"
                               id="address"
                               name="address"
                               placeholder="Address"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="logo">Logo</label>
                        <input type="text"
                               className="form-control"
                               id="logo"
                               name="logo"
                               placeholder="Logo"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="webSite">Website</label>
                        <input type="text"
                               className="form-control"
                               id="webSite"
                               name="webSite"
                               placeholder="Website"
                               required
                               onChange={handleChange}
                        />
                    </div>


                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CompanyAdd;