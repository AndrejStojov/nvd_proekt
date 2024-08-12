import React from "react";

const joboffers = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Position</th>
                            <th scope={"col"}>Details</th>
                            <th scope={"col"}>Starting Date</th>
                            <th scope={"col"}>Ending Date</th>
                            <th scope={"col"}>Location</th>
                            <th scope={"col"}>Company</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.joboffers.map((term) => {
                            return (
                                <tr>
                                    <td>{term.position}</td>
                                    <td>{term.detail}</td>
                                    <td>{term.startingDate}</td>
                                    <td>{term.endingDate}</td>
                                    <td>{term.location}</td>
                                    <td>{term.company}</td>

                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default joboffers;
