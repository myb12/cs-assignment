import React, { useEffect, useState } from 'react';
import './Experience.css';
import ExperienceCard from './ExperirnceCard/ExperienceCard';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useMediaQuery } from 'beautiful-react-hooks';
const Experience = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(null);
    const [animation, setAnimation] = useState(false);
    const isMobile = useMediaQuery('(max-width: 480px)');
    const isTab = useMediaQuery('(min-width: 480px) and (max-width: 990px)');
    const isPc = useMediaQuery('(min-width: 1050px)');

    useEffect(() => {
        if (isPc) setEndIndex(5);
        if (isTab) setEndIndex(3);
        if (isMobile) setEndIndex(1);
    }, [isPc, isTab, isMobile])

    useEffect(() => {
        setAnimation(true);
    }, [animation])

    const handleNext = () => {
        if (endIndex === partnersData.length) return;
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

    //----------fake data for partners----------//

    const partnersData = [
        {
            src: 'https://i.ibb.co/jbWQ0J3/brand-1.png',
        },
        {
            src: 'https://i.ibb.co/bHj2dQy/Brand-2.png',
        },
        {
            src: 'https://i.ibb.co/tHBVcML/Brand-3.png',
        },
        {
            src: 'https://i.ibb.co/W2MDn2g/Brand-4.png',
        },
        {
            src: 'https://i.ibb.co/qRj3Lxf/Brand-5.png',
        },
        {
            src: 'https://i.ibb.co/48DkGfX/Brand-6.png',
        },
        {
            src: 'https://i.ibb.co/vxSGp4z/Brand-7.png',
        },
        {
            src: 'https://i.ibb.co/vcfWGnP/Brand-8.png',
        },
        {
            src: 'https://i.ibb.co/TRm2ZK3/Brand-9.png',
        },
        {
            src: 'https://i.ibb.co/DYB9xbW/Brand-10.png',
        },
    ];
    const partnersDataToShow = partnersData.slice(startIndex, endIndex)
    return (
        <section className="experience-section" style={{ paddingBottom: 100 }}>
            <img className="experience-wave-shape" src="https://i.ibb.co/mBSLJxQ/real-world-shape.png" alt="" />
            <div className="container">
                {/* Experience cards section starts */}
                <div className="heading pt-80">
                    <h1>Real-world experience</h1>
                    <h4>The best business consulting firm you can count on!</h4>
                </div>

                <article className="experience-card-container">
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                </article>
                {/* Experience cards section ends */}

                {/* Partners section starts */}
                <div>
                    <div className="partner-heading">
                        <div>
                            <hr className="partner-title-line" />
                        </div>
                        <div>
                            <h2 className="partner-title">MEET THE PARTNERS</h2>
                        </div>
                        <div >
                            <hr className="partner-title-line" />
                        </div>
                    </div>

                    <div className={animation ? 'mounted-style partners' : 'partners'} >
                        <div onClick={handlePrevious} className={startIndex === 0 ? 'arrow-container arrow-container-disable' : 'arrow-container'}>
                            <FiArrowLeft />
                        </div>
                        {
                            partnersDataToShow.map(each => <img src={each.src} alt="Brand" />)
                        }
                        <div onClick={handleNext} className={endIndex === partnersData.length ? 'arrow-container arrow-container-disable' : 'arrow-container'}>
                            <FiArrowRight />
                        </div>
                    </div>
                </div>
                {/* Partners section ends */}
            </div>
        </section>
    );
};

export default Experience;