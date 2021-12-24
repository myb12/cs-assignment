import React, { useState } from 'react';
import {
    FaBars,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaTwitter,

} from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineClose, } from 'react-icons/md';
import './Header.css';

const Header = () => {
    const [burgerItem, setBurgerItem] = useState(false);

    const handleClick = () => {
        setBurgerItem(!burgerItem);
    }
    return (
        <header className="header">
            <nav>
                <div className="header-half">
                    <div className="logo" >
                        <img src="https://i.ibb.co/cDCSqLh/Group-15.png" alt="Logo" />
                    </div>

                    <div className='nav-item-container'>
                        <a href="/#" className="nav-item active">
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
                                +92 666 888 0000
                            </span>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={burgerItem ? 'hidden nav-icon' : 'nav-icon'} onClick={handleClick}>
                            <FaBars />
                        </a>
                    </div>
                </div>
            </nav>
            <div className={burgerItem ? 'burger-menu-item burger-menu-visible' : 'burger-menu-item'}>
                <MdOutlineClose className="icon-close" onClick={handleClick} />
                <a href="/#" className='active'>
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

            <div className={burgerItem ? 'burger-overlay-visible' : 'burger-overlay-invisible' } onClick={handleClick}>
                <div className="burger-overlay"></div>
            </div>
        </header>
    );
};

export default Header;