import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { serviceNumber, title, serviceDetails } = service;
    return (
        <div className="service-card-container">
            <div className="service-card">
                <div className="number-container">
                    {serviceNumber}
                </div>
                <div className="service-container">
                    <span>{title}</span>
                    <span>{serviceDetails}</span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;