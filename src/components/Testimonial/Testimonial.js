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
    const aboveMobile = useMediaQuery('(min-width: 993px)');


    useEffect(() => {
        if (isMobile) setEndIndex(1);
        if (aboveMobile) setEndIndex(2);
    }, [isMobile, aboveMobile])

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

    //---------fakedata for testimonials---------//
    const testimonialData = [
        {
            id: 1,
            name: 'Todd Higgins',
            role: 'Customer',
            text: 'Todd was very helpful and fast to respond to my inquiry to help with Wordpress website issues.  His knowledge was comprehensive.  Even better, his advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy! Thank you Todd Higgins.',
            imgURL: 'https://i.ibb.co/M6tvKnZ/about-6.jpg'
        },
        {
            id: 2,
            name: 'James Franklin',
            role: 'Designer',
            text: 'James was very helpful and fast to respond to my inquiry to help with Wordpress website issues.  His knowledge was comprehensive.  Even better, his advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy! Thank you James.',
            imgURL: 'https://i.ibb.co/1fZVmfQ/testimonials-1-1-1-X.png'
        },
        {
            id: 3,
            name: 'Jonas Shemdthmann',
            role: 'Web Developer',
            text: 'Jonas was very helpful and fast to respond to my inquiry to help with Wordpress website issues.  His knowledge was comprehensive.  Even better, his advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy! Thank you Jonas Shemdthmann.',
            imgURL: 'https://i.ibb.co/nnz5Mvj/about-7.jpg'
        },
    ]

    const testimoniaToShow = testimonialData.slice(startIndex, endIndex);

    return (
        <section className="testimonial-section">
            <div className="testimonial-container container">
                <div className="testimonial-left">
                    <h1>WHAT THEY ARE TALKING ABOUT?</h1>
                    <p>Trusted by more than 4,200 customers</p>
                    
                    {/* testimonial navigation arrow */}
                    <div className={!isMobile ? 'testimonial-arrow-container' : 'hidden'}>
                        <div className={startIndex === 0 ? 'arrow-disabled arrow' : 'arrow'} onClick={handlePrevious}>
                            <FiArrowLeft className="arrow-icon" />
                        </div>
                        <div className={endIndex === testimonialData.length ? 'arrow-disabled arrow' : 'arrow'} onClick={handleNext} >
                            <FiArrowRight className="arrow-icon" />
                        </div>
                    </div>

                </div>
                {/* testimonials start */}
                <div className="testimonial-right">
                    {
                        testimoniaToShow.map(testimonial => <div className="single-testimonial" key={testimonial.id}>
                            <TestimonialCard testimonial={testimonial} animation={animation} />
                        </div>)
                    }
                </div>
                {/* testimonials end */}

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
        </section>
    );
};

export default Testimonial;