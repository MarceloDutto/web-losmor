import React from "react";
import { Link, NavLink } from 'react-router-dom';

import './home.css';

const Home = () => {
    return (
        <main>
            <nav>
                <div className="nav-container">
                    <div className="links-block">
                        <div className="first-block">
                            <div className="mosaic mosaic-first">
                                <img src="/img/mosaic/66.jpg" alt="Navegación a las fotos de Fran" className="mosaic-img"/>
                                <NavLink to='/fran' >
                                    <div className="nav-link">
                                        <span className="link-text">Fran</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="mosaic">
                                <img src="/img/mosaic/68.jpg" alt="Navegación a las fotos de Marce" className="mosaic-img"/>
                                <NavLink to='/marce' >
                                    <div className="nav-link">
                                        <span className="link-text">Marce</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="mosaic-down">
                                <img src="/img/mosaic/matrimonio.jpg" alt="Navegación a las fotos del matrimonio" className="mosaic-img"/>
                                <NavLink to='/matrimonio' >
                                    <div className="nav-link">
                                        <span className="link-text">Matrimonio</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="second-block">
                            <div className="mosaic-top">
                                <img src="/img/mosaic/39.jpg" alt="Navegación a las fotos de Marce y Fran juntos" className="mosaic-img"/>
                                <NavLink to='/losmor' >
                                    <div className="nav-link">
                                        <span className="link-text">Los Mor</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="mosaic mosaic-first">
                                <img src="/img/mosaic/240.jpg" alt="Navegación a las fotos con Juan" className="mosaic-img"/>
                                <NavLink to='/conjuan' >
                                    <div className="nav-link">
                                        <span className="link-text">Con Juan</span>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="mosaic">
                                <img src="/img/mosaic/poshoyeri2.jpg" alt="Navegación a las fotos de Eriberto y el Posho Benito" className="mosaic-img"/>
                                <NavLink to='/poshoyeri' >
                                    <div className="nav-link">
                                        <span className="link-text">El posho y Eri</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </main>
    )
};

export default Home;