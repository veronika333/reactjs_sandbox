import React from 'react';
//import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './DesktopNavbar.css';

const DesktopNavbar = () => {
    return (
        <div>
            <div className="MyDesktopNavbar">
            <div className='logo'>Veronika Maisuradze</div>
            <ul className="nav-links">
                <li>
                    <Link to="/" className="Link">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="Link">About me</Link>
                </li>
                <li>
                    <Link to="/blog" className="Link">Blog</Link>
                </li>
            </ul>
</div>
        </div>
    );
};

export default DesktopNavbar;