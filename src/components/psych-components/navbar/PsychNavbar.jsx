import React, {useContext} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './navbar-styles.css';
import {AuthContext} from "../../../hooks/auth/authContext";
import {useNavigate} from "react-router-dom";
import {types} from "../../../hooks/auth/typesAuth";
import {FaUserMd} from "react-icons/fa";
import {NavLink} from "react-router-dom";

export const PsychNavbar = () => {
    
    
    const {user, dispatch}=    useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
        
        navigate("/", {
            replace: true
        })
        
    }
    
    
    
    return (
        <>
            <Navbar expand="lg" className="m-0 nav-psych" >
                <Container fluid>
                    <NavLink to={`psych/${user.id}`} className="nav-link p-0 m-0">
                        <Navbar.Brand className="color-second d-flex align-items-center justify-content-around">
                            <FaUserMd size={30}/>
                            <span className="d-block ms-1">Mi perfil</span>
                        </Navbar.Brand>
                    </NavLink>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
    
                        <Nav
                            className=" my-2 my-lg-0 me-2 d-flex align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            
                            <Nav.Link href="#" >
                                {`Welcome ${user.username}!`}
                            </Nav.Link>
                            <Nav.Link href="#action1">
                                <button className={"btn btn-outline-dark"} onClick={handleLogout}>
                                    Logout
                                </button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
