import React from "react";
import { Link, NavLink } from 'react-router-dom';

// STYLES
import './header.css';

const TopHeader = () => {
    return (
        <header>
            <div className="nav-home">
                <Link to='/' >
                    <h1>El album de Marce y Fran</h1>
                </Link>
            </div>
            <div className="separator">
                <div className="line"></div>
            </div>
        </header>
    )
};

export default TopHeader;