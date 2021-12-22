import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="overlay"></div>
            <div className="container hero-content">
                <div className="hero-inner-box">
                    <span className="welcome">Welcome to codeshaper</span>
                    <div className="hero-heading">
                        <p>Consulting</p>
                        <p>For Every</p>
                        <p>Business</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;