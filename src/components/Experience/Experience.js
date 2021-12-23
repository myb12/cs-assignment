import React from 'react';
import './Experience.css';
import ExperienceCard from './ExperirnceCard/ExperienceCard';

const Experience = () => {
    return (
        <section className="experience-section">
            <img className="experience-wave-shape" src="https://i.ibb.co/mBSLJxQ/real-world-shape.png" alt="" />
            <div className="container">
                <div className="experience-heading">
                    <h1>Real-world experience</h1>
                    <h4>The best business consulting firm you can count on!</h4>
                </div>

                <article className="experience-card-container">
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                </article>
            </div>
        </section>
    );
};

export default Experience;