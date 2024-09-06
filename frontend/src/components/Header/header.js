import React from 'react';
import {Link} from 'react-router-dom';

const header = (props) => {

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <a className="navbar-brand" href="/joboffers">Job-Offers</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/applications"}>Applications</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/companies"}>Companies</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className={"nav-link"} to={"/joboffers"}>Job-Offers</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default header;
