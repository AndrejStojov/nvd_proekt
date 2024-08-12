import React from 'react';
import {useNavigate} from 'react-router-dom';

    const ApplicationEdit = (props) => {

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
        const name = formData.name !== "" ? formData.name : props.application.name;
        const lastName = formData.lastName !== "" ? formData.lastName : props.application.lastName;
        const email = formData.email !== "" ? formData.email : props.application.email;
        const phoneNumber = formData.phoneNumber !== "" ? formData.phoneNumber : props.application.phoneNumber;

        props.onEditApplication(props.application.id, name, lastName, email, phoneNumber);
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
                               placeholder={props.application.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text"
                               className="form-control"
                               id="lastName"
                               name="lastName"
                               placeholder={props.application.lastName}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               className="form-control"
                               id="email"
                               name="email"
                               placeholder={props.application.email}
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

export default ApplicationEdit;
