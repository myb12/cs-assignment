import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({ testimonial, animation }) => {
    const { name, role, text, imgURL } = testimonial;
    return (
        <div className={animation ? 'testimonial-card testimonial-mounted-style' : 'testimonial-card'}>
            <div className="testimonial-text">
                <p>
                    {text}
                </p>
            </div>
            <div className="testimonial-details">
                <div className="name-and-designation">
                    <span>
                        {name}
                    </span>
                    <span>
                        {role}
                    </span>
                </div>
                <div className="testimonial-quotes">
                    <img src="https://i.ibb.co/BCvxYyB/testimonials-1-iocn-1-X.png" alt="Quotes" />
                </div>
            </div>

            <img src={imgURL} alt="testimonial" className="testimonial-image" />
        </div>
    );
};

export default TestimonialCard;