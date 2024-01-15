import React from 'react';
import './index.css'; // Optional: You can style your header in Header.css file
import logo from './logo.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <h1 className="heading">CyberPip</h1>
            <div className="tabs">
                <Link to="/" className="tab">Home</Link>
                <Link to="/services" className="tab">Services</Link>
                <Link to="/projects" className="tab">Projects</Link>
                <Link to="/technologies" className="tab">Technologies</Link>
                <Link to="/contacts" className="tab">Contacts</Link>
            </div>
        </div>
    );
};

export default Header;
