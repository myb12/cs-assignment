import React, { useEffect, useState } from 'react';
import './Testimonial.css'
import TestimonialCard from './TestimonialCard/TestimonialCard';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useMediaQuery } from 'beautiful-react-hooks';

const Testimonial = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(2);
    const [animation, setAnimation] = useState(false);
    const isMobile = useMediaQuery('(max-width: 992px)');
    const aboveMobile = useMediaQuery('(min-width: 601px)');
    const isSmallMobile = useMediaQuery('(max-width: 600px)');


    useEffect(() => {
        if (isSmallMobile) setEndIndex(1);
        if (aboveMobile) setEndIndex(2);
    }, [isSmallMobile, aboveMobile])

    useEffect(() => {
        setAnimation(true);
    }, [animation])

    const handleNext = () => {
        if (endIndex === testimonialData.length) return;
        setEndIndex(endIndex + 1);
        setStartIndex(startIndex + 1);
        setAnimation(!animation)
    }
    const handlePrevious = () => {
        if (startIndex === 0) return;
        setEndIndex(endIndex - 1);
        setStartIndex(startIndex - 1);
        setAnimation(!animation)
    }

    const testimonialData = [
        {
            id: 1,
            name: 'Todd Higgins',
            role: 'Customer',
            text: 'From the start of the project, through to completion, Todd supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative and creative way gave us a huge.',
            imgURL: 'https://i.ibb.co/RbMYqKF/testimonials-1-1-1-X-1.png '
        },
        {
            id: 2,
            name: 'James Franklin',
            role: 'Designer',
            text: 'In many ways James understood our clients website needs better than we did and he complimented our vision perfectly. He is reliable, professional and easy to work with. I cant recommend him highly enough and we look forward to continuing our working relationship together.',
            imgURL: 'https://i.ibb.co/1fZVmfQ/testimonials-1-1-1-X.png'
        },
        {
            id: 3,
            name: 'Jonas Shemdthmann',
            role: 'Web Developer',
            text: 'Jonas was very helpful and fast to respond to my inquiry to help with Wordpress website issues.  His knowledge was comprehensive.  Even better, his advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy! Thank you Jonas.',
            imgURL: 'https://i.ibb.co/RbMYqKF/testimonials-1-1-1-X-1.png '
        },
    ]

    const testimoniaToShow = testimonialData.slice(startIndex, endIndex);
    return (
        <section className="testimonial-section">
            <div className="testimonial-container container">
                <div className="testimonial-left">
                    <h1>WHAT THEY ARE TALKING ABOUT?</h1>
                    <p>Trusted by more than 4,200 customers</p>

                    <div className={!isMobile ? 'testimonial-arrow-container' : 'hidden'}>
                        <div className={startIndex === 0 ? 'arrow-disabled arrow' : 'arrow'} onClick={handlePrevious}>
                            <FiArrowLeft className="arrow-icon" />
                        </div>
                        <div className={endIndex === testimonialData.length ? 'arrow-disabled arrow' : 'arrow'} onClick={handleNext} >
                            <FiArrowRight className="arrow-icon" />
                        </div>
                    </div>

                </div>
                <div className="testimonial-right">
                    {
                        testimoniaToShow.map(testimonial => <div className="single-testimonial" key={testimonial.id}>
                            <TestimonialCard testimonial={testimonial} animation={animation} />
                        </div>)
                    }

                </div>

                {/* Only for mobile device */}
                <div className={isMobile ? 'testimonial-arrow-container show' : 'testimonial-arrow-container hidden'}>
                    <div className={startIndex === 0 ? 'arrow-disabled arrow' : 'arrow'} onClick={handlePrevious}>
                        <FiArrowLeft className="arrow-icon" />
                    </div>
                    <div className={endIndex === testimonialData.length ? 'arrow-disabled arrow' : 'arrow'} onClick={handleNext} >
                        <FiArrowRight className="arrow-icon" />
                    </div>
                </div>
            </div>

            <div className="mt-100"></div>
        </section>
    );
};

export default Testimonial;