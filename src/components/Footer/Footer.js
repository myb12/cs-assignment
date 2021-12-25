import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneSquareAlt, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { useMediaQuery } from 'beautiful-react-hooks';


const Footer = () => {
    const isMobile = useMediaQuery('(max-width: 990px)');
    return (
        <footer>
            <div className="container">
                <div className="footer-section">
                    <img className="footer-wave-shape" src="https://i.ibb.co/4Fgr9qs/footer-shape.png" alt="Footer shape" />
                    <div>
                        <img src="https://i.ibb.co/cDCSqLh/Group-15.png" alt="Logo" />
                        <p className="footer-about">
                            Welcome to our consultancy agency. Lore ipsum simply text amet cing elit simply text amet cing elit.
                        </p>
                        <div className="footer-contact">
                            <span className="footer-icons">
                                <FaPhoneSquareAlt className="footer-icon-phone mr-10" />
                                <span>+92 666 888 0000</span>
                            </span>
                            <span className="footer-icons">
                                <MdEmail className="footer-icon-email mr-10" />
                                <span>needhelp@company.com</span>
                            </span>
                            <span className="footer-icons">
                                <MdLocationOn className="footer-icon-location mr-10" />
                                <span>66 Broklyn Street New York, USA</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h3 className="footer-title">EXPLORE</h3>
                        <div className="footer-links">
                            <div>
                                <a href="#/">About</a>
                                <a href="#/">Meet our Team</a>
                                <a href="#/">Case studies</a>
                                <a href="#/">Latest news</a>
                                <a href="#/">Contact</a>
                            </div>
                            <div>
                                <a href="#/">Support</a>
                                <a href="#/">Terms of use</a>
                                <a href="#/">Privacy & Policy</a>
                                <a href="#/">Help</a>

                            </div>
                        </div>
                    </div>

                    <div className={isMobile && "subscribe-hidden"}>
                        <h3 className="footer-title">News letter</h3>
                        <div className="subscribe">
                            <div>
                                <h3>Subscribe for latest articles and resources</h3>
                                <div className="register-button-container">
                                    <input type="text" placeholder='Email Address' />
                                    <button className="register-button">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* this subscribe box is only for mobile view */}
                <div className={isMobile ? "subscriber-for-mobile subscribe-show" : "subscribe-hidden"}>
                    <h3 className="footer-title">News letter</h3>
                    <div className="subscribe">
                        <div>
                            <h3>Subscribe for latest articles and resources</h3>
                            <div className="register-button-container">
                                <input type="text" placeholder='Email Address' />
                                <button className="register-button">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copywrite-footer">
                    <div>
                        <p>© Copyright 2021 by Company</p>
                        <div className="footer-socials">
                            <FaInstagram className="instagram-icon"/>
                            <FaLinkedin className="linkedin-icon"/>
                            <FaTwitter className="twitter-icon"/>
                            <FaFacebook className="facebook-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;