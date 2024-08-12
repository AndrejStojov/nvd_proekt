import React from "react";
import {useNavigate} from 'react-router-dom';

const ApplicationAdd = (props) => {

    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        "name" : "",
        "lastName" : "",
        "email" : "",
        "phoneNumber" : ""
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
        const lastName = formData.lastName;
        const email = formData.email;
        const phoneNumber = formData.phoneNumber;

        props.onAddApplication(name, lastName, email, phoneNumber);
        history("/applications");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Application name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter application name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text"
                               className="form-control"
                               id="lastName"
                               name="lastName"
                               placeholder="LastName"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text"
                               className="form-control"
                               id="phoneNumber"
                               name="phoneNumber"
                               placeholder="PhoneNumber"
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

export default ApplicationAdd;
