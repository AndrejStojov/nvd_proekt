import React from 'react';
import {Link} from 'react-router-dom';

const companyTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.description}</td>
            <td>{props.term.location}</td>
            <td>{props.term.address}</td>
            <td> <img className='w-100 h-100' src={props.term.logo}></img></td>
            <td>{props.term.webSite}</td>

            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/companies/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}

export default companyTerm;