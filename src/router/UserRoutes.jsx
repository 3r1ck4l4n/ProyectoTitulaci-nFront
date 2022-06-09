import React from 'react';
import {Route, Routes} from "react-router-dom";
import {UserHome} from "../components/user-components/UserHome";
import {UserNav} from "../components/user-components/UserNav"
import {FormUser} from "../components/user-components/FormUser";
import {UserFooter} from "../components/user-components/UserFooter";
import {ChatUser} from "../components/commons/chat-user/ChatUser";


export const UserRoutes = () => {
    return (
        <>
            <UserNav/>
            <Routes>
                <Route path="/" element={<UserHome/>}></Route>
                <Route path="/home" element={<UserHome/>}></Route>
                <Route path="/test" element={<FormUser/>}></Route>
                <Route path="/test/:idTest" element={<FormUser/>}></Route>
                <Route path={"/chat"} element={<ChatUser/>}/>
            </Routes>
            <UserFooter/>
        </>
    );
};