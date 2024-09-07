import React from 'react';
import {Link} from 'react-router-dom';


const JobOfferTerm = (props) => {
    // let applications= props.applicationList.map(application=> {
    //     return <li>{application.name}</li>})
    return (
        <tr>
            <td>{props.term.position}</td>
            <td>{props.term.details}</td>
            <td>{props.term.startingDate}</td>
            <td>{props.term.endingDate}</td>
            <td>{props.term.location}</td>
            <td>{props.term.company.name}</td>
            <td><ul>
           
         
          </ul></td>

            <td className={"text-right"}>
                <a href='/joboffers' title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/joboffers/edit/${props.term.id}`}>
                    Edit
                </Link>
                <Link className={"btn btn-success ml-2"}
                      to={`/apply/${props.term.id}`}>
                    apply
                </Link>
            </td>
        </tr>
    )
}

export default JobOfferTerm;