import React from 'react';
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom';
import appRepository from "../../../repository/appRepository";
import ApplicationTerm from "../ApplicationTerm/applicationTerm";

class Applications extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 2
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.applications.length / this.state.size);
        const applications = this.getApplicationsPage(offset, nextPageOffset);
        console.log(applications, pageCount)

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>LastName</th>
                                <th scope={"col"}>Email</th>
                                <th scope={"col"}>Phone Number</th>
                            </tr>
                            </thead>
                            <tbody>
                            {applications}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/applications/add"}>Add new application</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }

    getApplicationsPage = (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.applications.map((term, index) => {
            return (
                <ApplicationTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            );
        }).filter((product, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default Applications;