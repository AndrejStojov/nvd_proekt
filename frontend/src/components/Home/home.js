import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import JobofferTerm from "../Job-Offers/JobOfferTerm/jobofferTerm"; // Ensure axios is installed

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 10,
            name: ""
        }
    }

    render() {

        const joboffers = this.getJobOfferPage();

        const handleChange=(e)=>{
            e.target.name= e.target.value.trim()
            this.state.name=e.target.name
        }
        const onFormSubmit=(e)=>{
            e.preventDefault()
            const submitName=this.state.name
            this.props.onFilter(submitName);
        }
        return (
            <>
                {/* Preloader Start */}
                <div id="preloader-active">
                    <div className="preloader d-flex align-items-center justify-content-center">
                        <div className="preloader-inner position-relative">
                            <div className="preloader-circle"></div>
                            <div className="preloader-img pere-text">
                                <img src="/assets/img/logo/logo.png" alt="Logo"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Preloader End */}


                <main>
                    {/* Slider Area Start */}
                    <div className="slider-area">
                        <div className="slider-active">
                            <div
                                className="single-slider slider-height d-flex align-items-center"
                                style={{backgroundImage: `url(/assets/img/hero/h1_hero.jpg)`}}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-9 col-md-10">
                                            <div className="hero__caption">
                                                <h1>Find the most exciting startup jobs</h1>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Search Box */}
                                    <div className="row">
                                        <div className="col-xl-8">
                                            {/* Form */}
                                            <form onSubmit={onFormSubmit} className="search-box">
                                                <div className="input-form">
                                                    <input onChange={handleChange} type="text" name="name" placeholder="Job Title or keyword"/>
                                                </div>

                                                <div className="search-form">
                                                    <button className="btn btn-primary btn-lg btn-block p-3" type="submit" >Find job</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slider Area End */}

                    {/*Featured_job_start*/}
                    <section className="featured-job-area feature-padding">
                        <div className="container">
                            {/* Section Title */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-tittle text-center">
                                        <span>Recent Job</span>
                                        <h2>Featured Jobs</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    {joboffers}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Featured_job_end*/}
                </main>

                <footer>
                    {/* Footer Start */}
                    <div className="footer-area footer-bg footer-padding">
                        <div className="container">
                            <div className="row ">
                                {/* About Us Section */}
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>About Us</h4>
                                            <div className="footer-pera">
                                                <p>Andrej Stojov</p>
                                                <p>Marija Dimitrieska</p>
                                                <p>Angela Ivanova</p>
                                                <p>Filip Gacov</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Info Section */}
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Contact Info Finki</h4>
                                            <ul>
                                                <li>
                                                    <p>Address: ул. Руѓер Бошковиќ 16, Пoштенски Фах 393,
                                                        1000, Скопје, Република Северна Македонија</p>
                                                </li>
                                                <li><a href="#">Email: contact@finki.ukim.mk</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Important Links Section */}
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Important Links</h4>
                                            <ul>
                                                <li><Link to="/home">Home</Link></li>
                                                <li><Link to="/chat">Costumer Service</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Footer Wejed Section */}
                            <div className="row footer-wejed justify-content-between">
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                    {/* Logo */}
                                    <div className="footer-logo mb-20">
                                        <Link to="/"><img src="/assets/img/logo/logo2_footer.png"
                                                          alt="Footer Logo"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </>
        );
    };
    getJobOfferPage = () => {

        return this.props.joboffers.map((offer) => {
            return (
                <div key={offer.id} className="single-job-items mb-30">
                    <div className="job-items">
                        <div className="company-img">
                            <Link to={`/job_details/${offer.id}`}>
                                <img src={offer.company.logo} style={{width: 10 + 'em'}}
                                     alt={`Job Listing ${offer.id}`}/>
                            </Link>
                        </div>
                        <div className="job-tittle">
                            <Link to={`/job_details/${offer.id}`}>
                                <h4>{offer.position}</h4>
                            </Link>
                            <ul>
                                <li>{offer.company.name}</li>
                                <li><i
                                    className="fas fa-map-marker-alt"></i> {offer.location}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="items-link f-right">
                        <Link to={`/job_details/${offer.id}`}>Details</Link>
                        <span>{offer.startingDate} - {offer.endingDate}</span>
                    </div>
                </div>
            );
        })
    }
}

export default Home;
