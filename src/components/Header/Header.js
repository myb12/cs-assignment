import React, { useState } from 'react';
import {
    FaBars,
    FaWindowClose,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaTwitter,

} from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import './Header.css';

const Header = () => {
    const [burgerItem, setBurgerItem] = useState(false);

    const handleClick = () => {
        setBurgerItem(!burgerItem);
    }
    return (
        <div className="header">
            <nav>
                <div className="header-half">
                    <div className="logo" >
                        <img src="https://i.ibb.co/LJXKPvS/Group-11-1-X.png" alt="" />
                    </div>

                    <div className='nav-item-container'>
                        <a href="/#" className="nav-item">
                            Home
                        </a>
                        <a href="/#" className="nav-item">
                            Services
                        </a>
                        <a href="/#" className="nav-item">
                            Pages
                        </a>
                        <a href="/#" className="nav-item">
                            Case Shop
                        </a>
                        <a href="/#" className="nav-item">
                            Blog
                        </a>
                        <a href="/#" className="nav-item">
                            Content
                        </a>
                    </div>
                </div>

                <div className="header-half">
                    <div className='nav-item-container'>
                        <a href="/#" className="nav-item">
                            <FaInstagram />
                        </a>

                        <a href="/#" className="nav-item after-border">
                            <FaLinkedin />
                        </a>
                        <a href="/#" className="nav-item">
                            <FaTwitter />
                        </a>
                        <a href="/#" className="nav-item">
                            <FaFacebook />
                        </a>
                        <div className=' search'>
                            <a href="/#" className="nav-item">
                                <FiSearch />
                            </a>
                        </div>
                        <a href="/#" className="need-help">
                            <span>Need help?</span>
                            <span>
                                <a href="callto:+926668880000">+92 666 888 0000</a>
                            </span>
                        </a>
                        <a href="/#" className="nav-icon" onClick={handleClick}>
                            <FaBars />
                        </a>
                    </div>
                </div>
            </nav>
            <div className={burgerItem ? 'burger-menu-item burger-menu-visible' : 'burger-menu-item'}>
                <FaWindowClose className="icon-close" onClick={handleClick} />
                <a href="/#">
                    Home
                </a>
                <a href="/#">
                    Services
                </a>
                <a href="/#">
                    Pages
                </a>
                <a href="/#">
                    Case Shop
                </a>
                <a href="/#">
                    Blog
                </a>
                <a href="/#">
                    Content
                </a>
                <div className='burger-socials'>
                    <a href="/#">
                        <FaInstagram />
                    </a>

                    <a href="/#">
                        <FaLinkedin />
                    </a>
                    <a href="/#">
                        <FaTwitter />
                    </a>
                    <a href="/#">
                        <FaFacebook />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;