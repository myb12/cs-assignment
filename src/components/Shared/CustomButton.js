import React from 'react';
import './CustomButton.css';

const CustomButton = ({ children }) => (
    <button className="custom-button">
        {children}
    </button>
)

export default CustomButton;