import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Login} from "../components/forms/Login";
import {Footer} from "../components/commons/Footer";
import {Register} from "../components/forms/Register";
import {ChatUser} from "../components/commons/chat-user/ChatUser";


export const PublicRoutes = () => {
    return (
        <>
            <div className="w-100">
                    <Routes>
                        <Route path={"/"} element={<Login/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/register"} element={<Register/>}/>
                    </Routes>
                <Footer/>
            </div>
    
    
            
        </>
        
    );
};