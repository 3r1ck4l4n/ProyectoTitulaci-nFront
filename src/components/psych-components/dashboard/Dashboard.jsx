import React from 'react';
import {Sidebar} from "../Sidebar";
import {Route, Routes} from "react-router-dom";
import {PsychHome} from "../PsychHome";
import {Col} from "react-bootstrap";
import {PsychNavbar} from "../navbar/PsychNavbar";
import {Profile} from "../profile/Profile";
import {Footer} from "../../commons/Footer";
import {TableUsers} from "../../utils/TableUsers";
import {PatientProfile} from "../profile/PatientProfile";
import {ChatUser} from "../../commons/chat-user/ChatUser";

export const Dashboard = () => {
    return (
        <>
                <Sidebar/>
    
                <Col md={10} className={"main-content"}>
                    <PsychNavbar/>
                    <div>
                        <Routes>
                            <Route path={"/"} element={<PsychHome/>}/>
                            <Route path={"/home"} element={<PsychHome/>}/>
                            <Route path={"/psych/:idUser"} element={<Profile/>}/>
                            <Route path={"/users"} element={<TableUsers/>}/>
                            <Route path={"/chat"} element={<ChatUser/>}/>
                            <Route path={"/users/:idUser"} element={<PatientProfile/>}/>
                        </Routes>
                        
                    </div >
    
                    <Footer/>
                </Col>
        </>
    );
};