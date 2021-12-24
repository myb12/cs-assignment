import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './SuccessCard.css'

const SuccessCard = ({ success }) => {
    return (
        <div className="success-card-container">
            <div className="success-card">
                <div className="success-icon">
                    <FiCheckCircle />
                </div>
                <div className="success-container">
                    <span>{success.title}</span>
                    <span>{success.description}</span>
                </div>
            </div>
        </div>
    );
};

export default SuccessCard;