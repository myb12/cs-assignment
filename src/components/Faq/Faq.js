import React from 'react';
import { FiCheck } from 'react-icons/fi';
import Accordion from '../Shared/Accordion/Accordion';
import './Faq.css'

const Faq = () => {
    return (
        <section className="faq-section container mt-100">
            <div className="heading">
                <h1>QUESTION ANSWERS</h1>
                <h4 className="text-grey">We help our clients renew their business</h4>
            </div>
            <div className="faq-container">
                <div className="faq-left">
                    <Accordion />
                </div>
                <div className="faq-right">
                    <div className="faq-image">
                        <img src="https://i.ibb.co/jkzXLK5/faq-one-img-1-1-X.png" alt="" />
                    </div>
                    <div className="faq-inner-container">
                        <ul>
                            <li>
                                <FiCheck className="icon-check" />
                                Nsectetur cing elit.
                            </li>
                            <li>
                                <FiCheck className="icon-check" />
                                Suspe ndisse suscipit sagittis leo.
                            </li>
                            <li>
                                <FiCheck className="icon-check" />
                                Entum estibulum dignissim posuere.
                            </li>
                            <li>
                                <FiCheck className="icon-check" />
                                If you are going to use a passage
                            </li>
                            <li>
                                <FiCheck className="icon-check" />
                                If you are going to use a passage test data.
                            </li>
                        </ul>
                        <div className="experience-box">
                            <span>30</span>
                            <span>Years of Expeirence</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-100"></div>
        </section>
    );
};

export default Faq;