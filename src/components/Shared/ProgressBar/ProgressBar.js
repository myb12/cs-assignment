import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percentage, title }) => {
    return (
        <>
            <div class="progress">
                <div class="bar" style={{ width: percentage }}></div>
            </div>
            <div className="service-details" style={{ width: percentage }}>
                <span>{title}</span>
                <span>{percentage}</span>
            </div>
        </>
    );
};

export default ProgressBar;