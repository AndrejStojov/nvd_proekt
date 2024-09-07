import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import authService from "../../repository/Authentication/auth_service";

const Header = (props) => {
    const [currentUser,setCurrentUser]=useState(false)
    useEffect(() => {
        const user=authService.getCurrentUser()
        if(user){
            setCurrentUser(user)
        }
    }, []) 

    const logout=()=>{
        authService.logout()
    
    }

    return (

        <>
        <header>
            {currentUser && (
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <a className="navbar-brand" href="/joboffers">Job-Offers</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/applications"}>Applications</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/companies"}>Companies</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className={"nav-link"} to={"/joboffers"}>Job-Offers</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className={"nav-link"} to={"/chat"}>ChatBot</Link>
                        </li>
                        
                        
                        
                        
                        
                    </ul>
                    <ul className="navbar-nav ms-auto me-3">
                    {!currentUser && (
                            <>
                                <li className="nav-item active">
                                    <a className={"nav-link"} href={"/register"}>Register</a>
                                </li>
                                <li className="nav-item active">
                                    <a className={"nav-link"} href={"/login"}>Login</a>
                                </li>
                            </>
                        )}
                         {currentUser && (
                            <>
                            <li className="nav-item active">
                            <a className={"nav-link"} href={"/home"} onClick={logout}>Logout</a>
                        </li>
                            </>
                         )}
                    </ul>
                </div>
            </nav>
            )}
        </header>
    <header>
        {/* Header Start */}
        <div className="header-area header-transparrent">
            <div className="headder-top header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-2">
                            {/* Logo */}
                            <div className="logo">
                                <Link to="/home">
                                    <img src="/assets/img/logo/logo.png" alt="Logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="menu-wrapper">
                                {/* Main-menu */}
                                <div className="main-menu">
                                    <nav className="d-none d-lg-block">
                                        <ul id="navigation">
                                            <li>
                                                <Link to="/home">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/chat">Customer Service</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* Header-btn */}
                                <div className="header-btn d-none f-right d-lg-block">
                                    {/*<Link to="/register" className="btn head-btn1">*/}
                                    {/*    Register*/}
                                    {/*</Link>*/}
                                    <Link to="/login" className="btn head-btn2">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Mobile Menu */}
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Header End */}
    </header>
        </>
    )
}

export default Header;
