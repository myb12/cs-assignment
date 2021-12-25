import React from "react";
import { FaHandPointUp } from 'react-icons/fa';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const TopEvent = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    // When the user scrolls down 20px from the top of the document, show the button
    const scrollFunction = () => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            document.getElementById("topButton").style.visibility = "visible";
            document.getElementById("topButton").style.transform = "scale(1)";
        } else {
            document.getElementById("topButton").style.visibility = "hidden";
            document.getElementById("topButton").style.transform = "scale(0)";
        }
    }
    window.onscroll = function () {
        scrollFunction();
    };
    window.onload = function () {
        scrollFunction();
    }; //To make sure that this button is not visible at starting.
    // When the user clicks on the button, scroll to the top of the document
    return (
        <button onClick={TopEvent} id="topButton" title="Go to top">
            <FaHandPointUp/>
        </button>
    );
}
export default ScrollToTop;