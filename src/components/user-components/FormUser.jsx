import React, {useContext, useState} from 'react';
import {AuthContext} from "../../hooks/auth/authContext";
import {useFetch} from "../../services/profile.service";
import {URLApiExpertSys as URL} from "../../envs/apiExpertSys";
import {useParams} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import {Question} from "./Question";
import {Formik} from "formik";
import {ModalTest} from "./ModalTest";
import Axios from "axios";
import {ModalResponse} from "./ModalResponse";

export const FormUser = () => {
    
    const [response, setResponse] = useState({message:"", result:0,loading: true });
    
    
    const {idTest} = useParams();
    const {user} = useContext(AuthContext);
    const {token} = user;
    const idUser = user.id;
    const urlPost = `${URL}/api/result/save`;
    let responseInfo;
    
    const handleSubmit = (r)=>{
        delete r.initialValues;
        console.log(r)
        let respuesta = {
            "idUser": idUser,
            "idTest": Number(idTest),
            "answers":{
                ...r
            }
        }
        
        console.log(respuesta);
        
        Axios.post(urlPost, respuesta, {
                headers: {'Authorization': "Bearer " + token}
            })
            .then((response)=>{
                if(response.status===201){
                    
                    setResponse({
                        ...response.data,
                        loading: false
                    })
                }
                
            })
            .catch(e=>console.log(e));
    
    }
    
    const urlGet = `${URL}/api/test/${idTest}`;
    const {data, loading} =  useFetch(urlGet);
    
    let questions = !loading? data.questions:null;
    let nameTest = !loading? data.nameTest:null;
    let descriptionTest = !loading? data.descriptionTest:null;
    const initialValues={};
    
    if(!loading){
        console.log(data.questions);
        data.questions.forEach(question => {
            initialValues[`question${question.idQuestion}`]="";
        });
        
        console.log(initialValues);
    }
    return (
        <div className="container col-11 mx-auto mt-3">
            {response.loading&&!loading  &&
                <ModalTest descriptionTest={descriptionTest} nameTest={nameTest}/>
            }
            {!response.loading&&
                <div className="w-50 mx-auto">
                    <h2 className="text-center text-primary">Su resultado es el siguiente: </h2>
                    <ModalResponse message={response.message} result={response.result}/>
                </div>
            }
            {response.loading&&!loading &&<Formik initialValues={{
                initialValues
            }} onSubmit={handleSubmit}>
                {
                    ({handleSubmit, handleChange}) =>
                        <Form onSubmit={handleSubmit}>
                            <div className="d-flex flex-wrap justify-content-around overflow-scroll form-container">
                                { !loading && questions.map(q => {
                                    return (
                                        <Question handleChange={handleChange} answers={q.answers}
                                                  idQuestion={q.idQuestion} questionStatement={q.questionStatement}
                                                  key={`${q.idQuestion}question`}/>
                                    );
                                })}
                            </div>
                    
                            <Button type="submit" className="btn btn-primary d-block w-25 mx-auto mt-2">Enviar</Button>
                        </Form>
                }
            </Formik>
            }
        </div>
    );
};