import React, { useEffect, useState } from 'react';
import { Container, ProgressBar, Table } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useGetDoctorsQuery } from '../../features/sigmaApi';
import ContactForEveryPage from '../ContactForEveryPage/ContactForEveryPage';
import Footer from '../Home/Footer/Footer';
import Header from '../Share/Header/Header';
import './SingleDoctor.css';

const SingleDoctor = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const { id } = useParams();
    const [singleDoctor, setSingleDoctor] = useState([]);
    const doctorsInfo = useGetDoctorsQuery();
    console.log(doctorsInfo.data);

    useEffect(() => {
        const foundDoctor = doctorsInfo?.data?.find(doctors => doctors?._id === id);
        setSingleDoctor(foundDoctor);
    }, [doctorsInfo?.data, id]);

    return (
        <div>
            <Header />
            <div className='single-doctor-header'>
                <div>
                    <Container className='text-center header-text'>
                        <h1>{singleDoctor?.name}</h1>
                    </Container>
                </div>
            </div>
            <div className='single-doctor-body'>
                <Container>
                    <div className='row'>
                        <div className='col-md-4 col-12'>
                            <div className="card doctor-card">
                                <img src={`data:image/*;base64,${singleDoctor?.photo}`} className="card-img" alt="..." />
                                <div className="row card-img-overlay">
                                    <div className='icon-setup'>
                                        <a href={singleDoctor?.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                                        <br />
                                        <a href={singleDoctor?.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                                        <br />
                                        <a href={singleDoctor?.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                    <div className='mt-auto about-doctor2'>
                                        <h2>{singleDoctor?.name}</h2>
                                        <h5>{singleDoctor?.title}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 d-flex justify-content-center align-items-center ">
                                <NavLink to={`/dashboard/appointment`}>
                                    <button style={{ margin: "0 auto" }} className="services-btn">
                                        <span>Get Appoinment</span><i className="fas fa-plus btn-icon"></i>
                                    </button>
                                </NavLink>
                            </div>
                            <div className='opning-time2'>
                                <div className='service-card-icon2'>
                                    <i className="fas fa-clock fa-3x"></i>
                                </div>
                                <h4 className='time2'>Opening Time</h4>
                                <div className='table-data2'>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td>{singleDoctor?.day}</td>
                                                <td>{singleDoctor?.time}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <ContactForEveryPage />
                        </div>

                        <div className='col-md-8 col-12'>
                            <div className='single-doctor-right'>
                                <h1 className='mt-3'>{singleDoctor?.title}</h1>
                                <p>{singleDoctor?.description}</p>

                                <div className='row'>
                                    <div className='col-md-6 col-12 HonorsandAwards'>
                                        <h4 className='mb-5'>Honors and Awards</h4>
                                        <div className='row award-setup'>
                                            <div className='col-md-2 col-12'>
                                                <i className="fas fa-award fa-3x"></i>
                                            </div>
                                            <div className='col-md-10 col-12'>
                                                {singleDoctor?.awardFirst}
                                            </div>
                                        </div>
                                        <div className='row award-setup'>
                                            <div className='col-md-2 col-12'>
                                                <i className="fas fa-award fa-3x"></i>
                                            </div>
                                            <div className='col-md-10 col-12'>
                                                {singleDoctor?.awardSecond}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-12 Skillset'>
                                        <h4 className='mb-5'>Skillset</h4>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p>Technique</p>
                                            <p>{`${singleDoctor?.percent1}%`}</p>
                                        </div>
                                        <ProgressBar variant='info' now={singleDoctor?.percent1} />
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p>Empathy</p>
                                            <p>{`${singleDoctor?.percent2}%`}</p>
                                        </div>
                                        <ProgressBar variant='info' now={singleDoctor?.percent2} />
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p>Operation</p>
                                            <p>{`${singleDoctor?.percent3}%`}</p>
                                        </div>
                                        <ProgressBar variant='info' now={singleDoctor?.percent3} />
                                    </div>
                                </div>
                                <div className='row award-setup'>
                                    <div className='col-md-3'>
                                        <h4>Speciality</h4>
                                    </div>
                                    <div className='col-md-9'>
                                        <i className="far fa-star"></i> {singleDoctor?.speciality}
                                    </div>
                                </div>
                                <div className='row award-setup'>
                                    <div className='col-md-3'>
                                        <h4>Education</h4>
                                    </div>
                                    <div className='col-md-9'>
                                        <i className="fas fa-check"></i> {singleDoctor?.eduLine1}
                                        <br /> <br />
                                        <i className="fas fa-check"></i> {singleDoctor?.eduLine2}
                                        <br /> <br />
                                        <i className="fas fa-check"></i> {singleDoctor?.eduLine3}
                                    </div>
                                </div>
                                <div className='row award-setup'>
                                    <div className='col-md-3'>
                                        <h4>Experience</h4>
                                    </div>
                                    <div className='col-md-9'>
                                        <i className="fas fa-file-alt"></i> {singleDoctor?.experience} Years of experience as a {singleDoctor?.speciality}
                                    </div>
                                </div>

                                <div className='single-doctor-right-footer'>
                                    <h6 style={{ letterSpacing: "3px" }}>DOCTORS</h6>
                                    <h2>Recommended Colleague Doctors</h2>
                                    <Slider {...settings}>
                                        {
                                            doctorsInfo?.data?.map(doctor =>
                                                <div key={doctor._id}>
                                                    <div className="card doctor-card">
                                                        <img src={`data:image/*;base64,${doctor?.photo}`} className="card-img" alt="..." />
                                                        <div className="row card-img-overlay">
                                                            <div className='icon-setup'>
                                                                <a href={doctor?.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                                                                <br />
                                                                <a href={doctor?.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                                                                <br />
                                                                <a href={doctor?.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                                            </div>
                                                            <div className='ps-2 mt-auto about-doctor'>
                                                                <NavLink to={`/singleDoctor/${doctor._id}`} className="text-decoration-none">
                                                                    <h4>{doctor?.name}</h4>
                                                                    <h6>{doctor?.title}</h6>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                    </Slider>
                                </div>
                                <div className='single-doctor-right-footer'>
                                    <h6 style={{ letterSpacing: "3px" }}>DOCTOR MOTO</h6>
                                    <h2>Health and Wellness For Everyone</h2>
                                    <p>{singleDoctor?.moto}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default SingleDoctor;