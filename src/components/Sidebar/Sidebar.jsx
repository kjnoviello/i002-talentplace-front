import React, { useState, useEffect } from "react";
import './Sidebar.css';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';


/*  IMAGES & LOGOS  */
import TalentplaceLogo from '../../assets/assets-png/2.png';
import { LuTable2 } from "react-icons/lu";
import { AiOutlineProject } from "react-icons/ai";
import { PiMoneyWavy } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { MdOutlineUpload } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";


const Sidebar = () => {

    const [show, setShow] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (

        <Container fluid className="dashboard-container d-flex">

            <div className="sidebar-container w-25 d-flex justify-content-center align-items-around">

                <div className="sidebar-button">
                    {isMobile && (
                        <CiMenuBurger size={30} variant="primary" onClick={handleShow} className="d-lg-none my-3" />
                    )}
                </div>

                <Offcanvas show={show} onHide={handleClose} responsive="lg" className="d-flex flex-column p-3 justify-content-around align-items-center">

                    <div className="sidebar-top d-flex flex-column align-items-center">
                        <img className="sidebar-top-logo" src={TalentplaceLogo} alt="Logo"></img>
                        <h5 className="sidebar-top-username">Username</h5>
                        <p className="sidebar-top-usermail">username@test.com</p>
                    </div>


                    <div className="sidebar-menu d-flex flex-column justify-content-around">
                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <div className="sidebar-menu-icon">
                                <LuTable2 size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/dashboard"
                            >
                                <h4>Dashboard</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <div className="sidebar-menu-icon">
                                <AiOutlineProject size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/proyectos"
                            >
                                <h4>Proyectos</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <div className="sidebar-menu-icon">
                                <PiMoneyWavy size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/payments"
                            >
                                <h4>Facturacion</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <div className="sidebar-menu-icon">
                                <GoPeople size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/talentos"
                            >
                                <h4>Personas</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-menu-row d-flex justify-content-start">
                            <div className="sidebar-menu-icon">
                                <MdOutlineUpload size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/proyectos"
                            >
                                <h4>Publicar proyectos</h4>
                            </NavLink>
                        </div>

                    </div>


                    <div className="sidebar-options d-flex flex-column justify-content-around">
                        <div className="sidebar-options-row d-flex justify-content-start">
                            <div className="sidebar-options-icon">
                                <BsChatDots size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/chat"
                            >
                                <h4>Chat</h4>
                            </NavLink>
                        </div>

                        <div className="sidebar-options-row d-flex justify-content-start">
                            <div className="sidebar-options-icon">
                                <GoPerson size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/profile"
                            >
                                <h4>Perfil</h4>
                            </NavLink>

                        </div>

                        <div className="sidebar-options-row d-flex justify-content-start">
                            <div className="sidebar-options-icon">
                                <RiLogoutCircleRLine size={30} />
                            </div>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${isActive ? "active" : ""}`
                                }
                                to="/logout"
                            >
                                <h4>Salir</h4>
                            </NavLink>
                        </div>

                    </div>

                </Offcanvas>

            </div>

            <div className="d-flex w-75 flex-column projects-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan sit amet nulla facilisi morbi tempus iaculis. Eget felis eget nunc lobortis mattis aliquam. Ac felis donec et odio pellentesque diam. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Urna cursus eget nunc scelerisque viverra mauris in. Leo a diam sollicitudin tempor id eu nisl nunc mi. Porta nibh venenatis cras sed felis eget velit aliquet. Sagittis eu volutpat odio facilisis mauris. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. At imperdiet dui accumsan sit amet nulla. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Praesent tristique magna sit amet purus gravida quis. Ipsum consequat nisl vel pretium lectus. Tempus iaculis urna id volutpat lacus. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Proin sed libero enim sed faucibus turpis in. Amet nisl purus in mollis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan sit amet nulla facilisi morbi tempus iaculis. Eget felis eget nunc lobortis mattis aliquam. Ac felis donec et odio pellentesque diam. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Urna cursus eget nunc scelerisque viverra mauris in. Leo a diam sollicitudin tempor id eu nisl nunc mi. Porta nibh venenatis cras sed felis eget velit aliquet. Sagittis eu volutpat odio facilisis mauris. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. At imperdiet dui accumsan sit amet nulla. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Praesent tristique magna sit amet purus gravida quis. Ipsum consequat nisl vel pretium lectus. Tempus iaculis urna id volutpat lacus. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Proin sed libero enim sed faucibus turpis in. Amet nisl purus in mollis.</p>
            </div>

        </Container>

    );
};

export default Sidebar;