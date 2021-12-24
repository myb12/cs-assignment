import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percentage, title }) => {
    return (
        <>
            <div className="progress">
                <div className="bar" style={{ width: percentage }}></div>
            </div>
            <div className="service-details" style={{ width: percentage }}>
                <span>{title}</span>
                <span>{percentage}</span>
            </div>
        </>
    );
};

export default ProgressBar;