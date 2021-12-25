import React from 'react';
import './ClientBox.css';

const ClientBox = () => {
    return (
        <div className="client-box">
            <div className="client-icon-container">
                <img src="https://i.ibb.co/Qr5k9Yk/Group-17.png" alt="Client icon" />
            </div>
            <div className="client-details">
                <h1>420</h1>
                <p>CONSULTING SOLUTIONS</p>
            </div>
        </div>
    );
};

export default ClientBox;