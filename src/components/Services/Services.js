import React from 'react';
import './Services.css';
import { FaPlay } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import ProgressBar from '../Shared/ProgressBar/ProgressBar';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
    //---------fake data for services---------//
    const serviceData = [
        {
            serviceNumber: '01',
            title: 'GET PROFESSIONAL ADVICE',
            serviceDetails: 'There are many variations of available but the majority have suffered alteration.'

        },
        {
            serviceNumber: '02',
            title: 'TRUSTED & PROFESSIONAL',
            serviceDetails: 'There are many variations of available but the majority have suffered alteration.'

        },
    ]
    return (
        <section className="services-section">

            <img src="https://i.ibb.co/TYX4tP5/service-path-bottom.png" alt="Service section shape" className="service-shape-top" />
            <img src="https://i.ibb.co/qkxB0J7/service-path-top.png" alt="Service section shape" className="service-shape-bottom" />

            <div className="services-container container">
                <div className="services-left">
                    <div className="play-box">
                        <FaPlay className="play-icon" />
                    </div>
                    <img src="https://i.ibb.co/RNtrz5Q/1-1X.png" alt="People working" />
                    <img src="https://i.ibb.co/W03XHWs/2-1X.png" alt="People working" />
                </div>
                <div className="services-right">
                    <div>
                        <h1 className="service-title">We’re leading in the market</h1>
                        <p className="service-details">
                            Lorem ipsum is simply free text dolor sit amet, consectetur notted
                            adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua lonm andhn.
                        </p>
                        <span>We have 35+ years of experience. We offer marketing and consultin services</span>
                        <div className="progress-bars">
                            <ProgressBar percentage="88%" title="consulting" />
                            <ProgressBar percentage="68%" title="advices" />
                        </div>
                    </div>
                    <img src="https://i.ibb.co/K9nwPYV/AIVONS.png" alt="" />

                    <div className="call-section">
                        <div className="phone-container">
                            <FiPhoneCall className="phone-icon" />
                        </div>
                        <div className="phone">
                            <span>Have any question? Give us a call</span>
                            <span>+92 666 888 0000</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* service cards starts */}
            <div className="container">
                <div className="service-cards">
                    {
                        serviceData.map((service) => <ServiceCard
                            key={service.serviceNumber}
                            service={service}
                        />)
                    }
                </div>
            </div>
            {/* service cards end */}
        </section>
    );
};

export default Services;