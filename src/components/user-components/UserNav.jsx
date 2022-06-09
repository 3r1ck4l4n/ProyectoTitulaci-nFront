import React, {useContext} from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {AuthContext} from "../../hooks/auth/authContext";
import {types} from "../../hooks/auth/typesAuth";


export const UserNav = () => {

    const {dispatch, user}=    useContext(AuthContext);
    const navigate = useNavigate();
    const username = user.username;
    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
        
        navigate("/", {
            replace: true
        })
        
    }


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><NavLink to="home" className="nav-link" > Expert system </NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <NavLink to="test/1" className="nav-link">Test</NavLink>
                    <Navbar.Text>
                       Welcome {username}!
                    </Navbar.Text>
                    <Button onClick={handleLogout} className="btn btn-outline-danger bg-light text-danger d-block ms-5">Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};