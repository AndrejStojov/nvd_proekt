import React from 'react';
import {Link} from 'react-router-dom';

const applicationTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.lastName}</td>
            <td>{props.term.email}</td>
            <td>{props.term.phoneNumber}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/applications/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}

export default applicationTerm;