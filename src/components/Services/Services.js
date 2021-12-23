import React from 'react';
import './Services.css';
import { FaPlay } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import ProgressBar from '../Shared/ProgressBar/ProgressBar';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
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
            <img src="https://i.ibb.co/TYX4tP5/service-path-bottom.png" alt="" className="service-shape-top" />
            <img src="https://i.ibb.co/qkxB0J7/service-path-top.png" alt="" className="service-shape-bottom" />


            <div className="servces-container container">
                <div className="servces-left">
                    <div className="play-box">
                        <FaPlay className="play-icon" />
                    </div>
                    <img src="https://i.ibb.co/RNtrz5Q/1-1X.png" alt="" />
                    <img src="https://i.ibb.co/W03XHWs/2-1X.png" alt="" />
                </div>
                <div className="servces-right">
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
        </section>
    );
};

export default Services;