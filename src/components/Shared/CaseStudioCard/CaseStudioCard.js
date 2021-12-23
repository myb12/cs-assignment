import React from 'react';
import './CaseStudioCard.css';
import { BiCar } from 'react-icons/bi';

const CaseStudioCard = () => {
    return (
        <div className="case-studio-card">
            <div className="overlay-dark"></div>
            <img src="https://i.ibb.co/MZLxvF2/cases-1f.png" alt="" />
            <div className="case-studio-card-body">
                <div className="pl-30">
                    <div className="car-icon">
                        <BiCar />
                    </div>
                    <div className="card-content">
                        <small>Thought leadership</small>
                        <span>businesses growth</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudioCard;