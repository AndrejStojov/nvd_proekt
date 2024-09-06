import React from 'react';
import ReactPaginate from 'react-paginate'
import CompanyTerm from '../CompanyTerm/companyTerm';
import {Link} from 'react-router-dom';


class Companies extends React.Component {

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
        const pageCount = Math.ceil(this.props.companies.length / this.state.size);
        const companies = this.getCompaniesPage(offset, nextPageOffset);
        console.log(companies, pageCount)

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
                            {companies}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/companies/add"}>Add new Company</Link>
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

    getCompaniesPage = (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.companies.map((term, index) => {
            return (
                <CompanyTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            );
        }).filter((company, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default Companies;