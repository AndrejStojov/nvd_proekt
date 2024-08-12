import React from "react";

const applications = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Lastname</th>
                            <th scope={"col"}>Email</th>
                            <th scope={"col"}>Phone Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.applications.map((term) => {
                        return (
                            <tr>
                                <td>{term.name}</td>
                                <td>{term.lastName}</td>
                                <td>{term.email}</td>
                                <td>{term.phoneNumber}</td>
                            </tr>
                        );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}
export default applications;