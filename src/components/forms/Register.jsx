import React, {useState} from 'react';
import {URLApiExpertSys as URL} from "../../envs/apiExpertSys";
import Axios from "axios";
import * as yup from 'yup';
import {Alert, Card} from "react-bootstrap";
import {Formik} from "formik";
import {FormRegister} from "./FormRegister";
import {useNavigate} from "react-router-dom";




export const Register = () => {
    
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [registerError, setRegisterError] = useState({status: false, message: ""});
    const navigate = useNavigate();
    const registerSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
        username: yup.string().required(),
        numProf: yup.string().optional(),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match').required()
    
    });
    
    const handleRegister = (data) => {
        delete data.confirmPassword;
        let typeLogin = data.psych ? "psychologist" : "user";
        delete data.psych;
    
        Axios.post(`${URL}/register/${typeLogin}`, data).then(res => {
                
                if(res.status === 201){
                    setRegisterError({status: false,  message: ""});
                    setRegisterSuccess(true);
                    setTimeout(() => {
                        navigate("/", {
                            replace: true
                        })
                    }, 6000);
                }
            })
            .catch(error => {
                setRegisterError({status: true, message: error.response.data.message});
                console.log(error);
            })
    };
    return (
        <>
            <div className="w-75 mx-auto">
                {registerSuccess &&
                    <Alert variant="success" className ="d-block mt-2 mx-auto">
                        <p>Registro realizado con éxito </p>
                    </Alert>
                }
    
                {registerError.status &&
                    <Alert variant="danger" className ="d-block mt-2 mx-auto">
                        <p>Error! {registerError.message}</p>
                    </Alert>
                }
                <Card className="w-50 mx-auto p-4 bg-light mt-3 shadow">
                    <h3 className="text-primary"> Register now!
                        !</h3>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            username: "",
                            confirmPassword: "",
                            numProf: "",
                            psych: false
                        }}
                        validationSchema={registerSchema}
                        onSubmit={handleRegister}
                    >
                        {(properties) => {
                            return <FormRegister props={properties}/>
                        }}
                    </Formik>
                </Card>
            </div>
        
        </>
    );
};
