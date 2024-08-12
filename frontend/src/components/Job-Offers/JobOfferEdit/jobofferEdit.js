import React from 'react';
import {useNavigate} from 'react-router-dom';

const JobOfferEdit = (props) => {

    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        position: "",
        details: "",
        startingDate: 0,
        endingDate: 0,
        location: "",
        company : 1
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const position = formData.position !== "" ? formData.position : props.joboffers.position;
        const details = formData.details !== "" ? formData.details : props.joboffers.details;
        const startingDate = formData.startingDate !== 0 ? formData.startingDate : props.joboffers.startingDate;
        const endingDate = formData.endingDate !== 0 ? formData.endingDate : props.joboffers.endingDate;
        const location = formData.location !== "" ? formData.location : props.joboffers.location;
        const company = formData.company !== 0 ? formData.company : props.joboffers.company.id;
        props.onEditJobOffer(props.joboffers.id, position, details,startingDate,endingDate,location,company);
        history("/joboffers");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="position">JobOffers Position</label>
                        <input type="text"
                               className="form-control"
                               id="position"
                               name="position"
                               required
                               placeholder="Enter position name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <input type="text"
                               className="form-control"
                               id="details"
                               name="details"
                               placeholder="Details"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="startingDate">Starting Date</label>
                        <input type="text"
                               className="form-control"
                               id="startingDate"
                               name="startingDate"
                               placeholder="StartingDate"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endingDate">Ending Date</label>
                        <input type="text"
                               className="form-control"
                               id="endingDate"
                               name="endingDate"
                               placeholder="EndingDate"
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
                        <label>Company</label>
                        <select name="company" className="form-control" onChange={handleChange}>
                            {props.companies.map((term) =>
                                <option value={term.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default JobOfferEdit;