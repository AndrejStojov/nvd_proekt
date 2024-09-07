import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import AppService from "../../repository/appRepository";
const Details = () => {
    const { id } = useParams(); // Get the job offer ID from the URL

    const [isLoading, setIsLoading] = useState(true);
    const [jobOffer, setJobOffers] = useState({});
    useEffect(() => {
        const loadJobOffer = async () => {
            setIsLoading(true);
            try {
                const res = await AppService.getJobOffer(id);
                if (res.data) {
                    setJobOffers(res.data);
                    setIsLoading(false);
                    console.log(res.data)
                }
            } catch (error) {
                console.error(error);
            }
        };

        console.log(isLoading)
        loadJobOffer();

        console.log(isLoading)
    }, [id]);

    return (
            <>


                {isLoading && (
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
                )}  <div className="job-post-company pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-between">
                        {/* Left Content */}
                        <div className="col-xl-7 col-lg-8">
                            {/* Job Single */}
                            <div className="single-job-items mb-50">
                                <div className="job-items">
                                    <div className="company-img company-img-details">
                                        <a href="#">
                                            <img src={jobOffer?.company?.logo} style={{width: 10 + 'em'}} alt="Job Icon" />
                                        </a>
                                    </div>
                                    <div className="job-tittle">
                                        <a href="#">
                                            <h4>{jobOffer?.position}</h4>
                                        </a>
                                        <ul>
                                            <li>{jobOffer?.company?.name}</li>

                                            <li>{jobOffer?.location}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Job Single End */}

                            <div className="job-post-details">
                                <div className="post-details1 mb-50">
                                    {/* Small Section Title */}
                                    <div className="small-section-tittle">
                                        <h4>Job Description</h4>
                                    </div>
                                    <p>
                                        {jobOffer?.details}
                                    </p>
                                </div>

                                <div className="post-details2 mb-50">
                                    {/* Small Section Title */}
                                    <div className="small-section-tittle">
                                        <h4>Company details</h4>
                                    </div>
                                    <p>
                                        {jobOffer?.company?.description}
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="col-xl-4 col-lg-4">
                            <div className="post-details3 mb-50">
                                {/* Small Section Title */}
                                <div className="small-section-tittle">
                                    <h4>Job Overview</h4>
                                </div>
                                <ul>
                                    <li>Starting date: <span>{jobOffer?.startingDate}</span></li>
                                    <li>Location: <span>{jobOffer?.location}</span></li>
                                    <li>Ending date: <span>{jobOffer.endingDate}</span></li>
                                </ul>
                                <div className="apply-btn2">
                                    <Link to={`/apply/${jobOffer.id}`} className="btn btn-primary btn-lg btn-block ">Apply Now</Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>





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

}
export default Details;