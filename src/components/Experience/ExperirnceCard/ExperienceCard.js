import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = () => {
    return (
        <div className="experience-card">
            <div className="card-title">
                <h1>Wealth management</h1>
            </div>
            <div className="card-body">
                <div className="link-button">
                    <a href="/">Read more</a>
                </div>
                <img src="https://i.ibb.co/rcTmQzd/Icon-awesome-bitbucket.png" alt="Bucket icon" />
            </div>
        </div>
    );
};

export default ExperienceCard;