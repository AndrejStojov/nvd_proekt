import React from "react";

const companies = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Description</th>
                            <th scope={"col"}>Location</th>
                            <th scope={"col"}>Address</th>
                            <th scope={"col"}>Logo</th>
                            <th scope={"col"}>Website</th>

                        </tr>
                        </thead>
                        <tbody>
                        {props.companies.map((term) => {
                            return (
                                <tr>
                                    <td>{term.name}</td>
                                    <td>{term.description}</td>
                                    <td>{term.location}</td>
                                    <td>{term.address}</td>
                                    <td>{term.logo}</td>
                                    <td>{term.webSite}</td>

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

export default companies;
