import React from 'react';
import {Col, Nav, Navbar} from "react-bootstrap";
import './dashboard/styles-dashboard.css';
import {NavLink} from "react-router-dom";
import {RiMentalHealthFill} from "react-icons/ri";
import {FaHome, FaUsers} from "react-icons/fa";
import {SiFiles} from "react-icons/si";
import {BsFillChatDotsFill} from "react-icons/bs";

export const Sidebar = () => {
    return (
        <>
            <Col xs={2} className=" m-0 p-0 position-fixed  sidebar h-100">
                <Navbar className="flex-column h-100 ">
                    <NavLink to="/" className="nav-link d-block w-100 text-center px-0">
                        <Navbar.Brand className="m-0 p-0  side-brand">
                             <span className=""> <RiMentalHealthFill size={30} /> Expert System </span>
                        </Navbar.Brand>
                    </NavLink>
            
                    <Nav defaultActiveKey="/home" className="w-100 flex-column align-items-center px-0 mt-5 ">
                        <NavLink to="home"
                                 className={({isActive}) => isActive ? "nav-link  active" : "nav-link d-block " +
                                     "w-100 text-center effect-sidebar px-0 py-3"}
                        >
                            <span className="effect-text"> <FaHome size={20}/> Home</span>
                        </NavLink>
                        <NavLink to="tests"
                                 className={({isActive}) => isActive ? "nav-link  active" : "nav-link d-block " +
                                     "w-100 text-center effect-sidebar px-0 py-3"}>
                            <SiFiles size={20}/> Tests
                
                        </NavLink>
                
                        <NavLink to="users"
                                 className={({isActive}) => isActive ? "nav-link  active" : "nav-link d-block " +
                                     "w-100 text-center effect-sidebar py-3"}>
                            <FaUsers size={20}/> Users
                        </NavLink>
                        
                        <NavLink to="chat"
                                 className={({isActive}) => isActive ? "nav-link  active" : "nav-link d-block " +
                                     "w-100 text-center effect-sidebar py-3"}>
                            <BsFillChatDotsFill size={20}/> Chat
                        </NavLink>
                        <Nav.Link eventKey="disabled" disabled className="mt-5">
                            IPN - UPIICSA. 2022
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </Col>
        </>
    );
};