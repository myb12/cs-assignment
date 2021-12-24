import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import BusinessCard from './BusinessCard/BusinessCard';
import './Client.css'
import ClientBox from './ClientBox/ClientBox';
import SuccessCard from './SuccessCard/SuccessCard';

const Client = () => {
    const successData = [
        {
            id: 1,
            title: 'HIGHEST SUCCESS RATES',
            description: 'Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.'
        },
        {
            id: 2,
            title: 'WE BUILD EXPERIENCE',
            description: 'Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.'
        }
    ];
    return (
        <section className="client-section">
            <div className="client-top-banner">
                <div className="container client-top-banner-content">
                    <ClientBox />
                    <ClientBox />
                    <ClientBox />
                    <ClientBox />
                </div>
            </div>

            {/* business card section starts */}
            <div className="container">
                <div className="business-card-container">
                    <BusinessCard />
                    <BusinessCard />
                    <BusinessCard />
                </div>
            </div>
            {/* business card section ends */}

            {/* succcess story starts */}
            <div className="success-story-container container">
                <div className="success-cards">
                    {
                        successData.map(success => <SuccessCard
                            key={success.id}
                            success={success} />)
                    }
                </div>
                <div className="success-story-middle-box">
                    <div>
                        <p>There are many variations of passages of lorem ipsum available,
                            but the majority have suffered alteration in some form injected
                            humour or randomised words which don't look believable.</p>

                        <ul>
                            <li>
                                <AiOutlineMinus className="icon-check" />
                                Nsectetur cing elit.
                            </li>
                            <li>
                                <AiOutlineMinus className="icon-check" />
                                Suspe ndisse suscipit sagittis leo.
                            </li>
                            <li>
                                <AiOutlineMinus className="icon-check" />
                                Entum estibulum dignissim posuere.
                            </li>
                            <li>
                                <AiOutlineMinus className="icon-check" />
                                If you are going to use a passage
                            </li>
                            <li>
                                <AiOutlineMinus className="icon-check" />
                                If you are going to use a passage test data.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="success-image">
                    <img src="https://i.ibb.co/5R7qr03/financial-advice-img-1-1-X.png" alt="financial advicing" />
                </div>
            </div>
            {/* succcess story ends */}

        </section>
    );
};

export default Client;
