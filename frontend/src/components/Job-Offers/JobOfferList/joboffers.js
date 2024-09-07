import React from 'react';
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom';
import JobofferTerm from "../JobOfferTerm/jobofferTerm";

class JobOffers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 10
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.joboffers.length / this.state.size);
        const joboffers = this.getJobOfferPage(offset, nextPageOffset);
        console.log(joboffers, pageCount)

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
                                <th scope={"col"}>Applications</th>
                            </tr>
                            </thead>
                            <tbody>
                            {joboffers}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/joboffers/add"}>Add new Job-Offer</Link>
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

    getJobOfferPage = (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.joboffers.map((term, index) => {
            return (
                <JobofferTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            );
        }).filter((joboffer, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default JobOffers;