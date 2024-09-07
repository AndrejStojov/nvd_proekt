import React from 'react';
import {Link} from 'react-router-dom';

const companyTerm = (props) => {
    return (
        <tr>
            <td>{props.term.position}</td>
            <td>{props.term.details}</td>
            <td>{props.term.startingDate}</td>
            <td>{props.term.endingDate}</td>
            <td>{props.term.location}</td>
            <td>{props.term.company.name}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/joboffers/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}

export default companyTerm;