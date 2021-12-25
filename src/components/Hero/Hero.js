import React from 'react';
import CustomButton from '../Shared/CustomButton';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="overlay"></div>
            <div className="container hero-content">
                <div className="hero-inner-box">
                    <span className="welcome">Welcome to codeshaper</span>
                    <div className="hero-heading">
                        <p>Consulting</p>
                        <p>For Every</p>
                        <p>Business</p>
                    </div>
                    <CustomButton>
                        Discover more
                    </CustomButton>
                </div>
            </div>
            <ScrollToTop />
        </section>
    );
};

export default Hero;