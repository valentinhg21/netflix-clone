import React, { useEffect, useState } from 'react'
import './Nav.css'






export default function Nav() {
    // State 
    const [ show, handleShow ] = useState(false);

    //Navbar without background and Navbar with background when I scrolled
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100 ) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);
    



    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img  
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            />
            <img  
            className="nav__avatar"
            src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0.png?h=eba99c47b726e04e1228d83852b69211"
            alt="Netflix Logo"
            />
        </div>
    )
}
