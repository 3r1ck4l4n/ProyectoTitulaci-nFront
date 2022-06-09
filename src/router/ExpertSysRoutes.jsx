import React, {useContext} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Dashboard} from "../components/psych-components/dashboard/Dashboard";
import {AuthContext} from "../hooks/auth/authContext";
import {UserRoutes} from "./UserRoutes";
import {PublicRoutes} from "./PublicRoutes";

export const ExpertSysRoutes  = () => {
    
    const {user} = useContext(AuthContext);
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"*"} element={user.logged ? <Navigate to={"/expert-sys"}/>: <PublicRoutes/>}/>
                    <Route path={"/expert-sys/*"} element={
                        user.logged&&user.rol === "psychologist"? <Dashboard/>:
                            user.logged&&user.rol === "user"?<UserRoutes/>:
                            <Navigate to={"/"}/>
                    
                    }/>
                </Routes>
            </BrowserRouter>
        </>
    );
};
