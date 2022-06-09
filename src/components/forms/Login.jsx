import React, {useContext} from 'react';
import {Card} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from 'yup';

import {useNavigate} from "react-router-dom";
import {FormLogin} from "./FormLogin";
import {URLApiExpertSys as URL} from "../../envs/apiExpertSys";
import Axios from "axios";
import {types} from "../../hooks/auth/typesAuth";
import {AuthContext} from "../../hooks/auth/authContext";

export const Login = () => {
    
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogin = (data) => {
        let typeLogin = data.psych && data.psych.length > 0 ? "psychologist" : "user";
        Axios.post(`${URL}/auth/${typeLogin}`, data).then(res => {
                const action = {
                    type: data.psych && data.psych.length > 0 ? types.loginPsych : types.loginUser,
                    payload: res.data
                }
                dispatch(action);
                navigate("/expert-sys", {
                    replace: true
                })
            })
            .catch(error => {
                console.log(error.response.data.message)
            })
    };
    
    const loginSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required()
    });
    
    return (
        <>
            <div className="w-75 mx-auto mt-5 ">
                <Card className="w-50 mx-auto p-4 bg-light mt-3 shadow">
                    <h3 className="text-primary"> Welcome to Expert System!</h3>
                    
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={loginSchema}
                        onSubmit={handleLogin}
                    >
                        {(properties) => {
                            return <FormLogin props={properties}/>
                        }}
                    </Formik>
                </Card>
            </div>
        </>
    )
};

