import React, {useEffect, useReducer} from 'react';

import {ExpertSysRoutes} from "./ExpertSysRoutes";
import {AuthContext} from "../hooks/auth/authContext";
import {authReducer} from "../hooks/auth/authReducer";


const init = ()=>{
    return JSON.parse(sessionStorage.getItem("user"))|| {logged:false};
}

export const ExpertSystem = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);
    
    useEffect(()=>{
        if(!user)return;
        sessionStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    return (
        <AuthContext.Provider value={
            {
                user,
                dispatch
            }
        }>
           <ExpertSysRoutes/>
       </AuthContext.Provider>
    );
};
