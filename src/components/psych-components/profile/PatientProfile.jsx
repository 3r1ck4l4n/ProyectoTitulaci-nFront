import React from 'react';
import {Button, Card, Spinner, Table} from "react-bootstrap";
import {useFetch} from "../../../services/profile.service";
import {URLApiExpertSys} from "../../../envs/apiExpertSys";
import {useParams} from "react-router-dom";
import './profie-styles.css';

export const PatientProfile = () => {
    
    
    const {idUser} = useParams();
    console.log(idUser)
    const data = useFetch(`${URLApiExpertSys}/api/user/${idUser}`);
    
    
    
    return (
        <>
            {
                data.loading&&
                <div className="mx-auto mt-5 pt-5">
                    <Button className="d-block mx-auto mt-5 p-5 button-spinner" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>
                </div>
            }
            {!data.loading &&
                <Card className="mx-auto col-6 mt-5 flex-row profile-user-card p-1 rounded">
                    <Card.Img className="rounded-circle w-50 mx-auto p-4" variant="top" src="/images/patient.png"/>
                    <Card.Body>
                        <Card.Title className="text-clear  border-bottom d-block mt-2 pb-2">User Info:
                        </Card.Title>
                        <ul className="d-block mt-2 text-clear">
                            <li>Name: <span className="text-dark"> {data.data.userName} </span></li>
                            <li>Email: <span className="text-dark"> {data.data.emailUser}</span></li>
                            <li>Register Date: <span className="text-dark">{data.data.createdAt}</span></li>
                        </ul>
                    </Card.Body>
                </Card>
            }
                {!data.loading &&
                    <div className="w-75 mx-auto mt-auto p-2 overflow-scroll ">
                        <Table responsive striped bordered hover size="sm">
                            <thead>
                            <tr>
                                <th>Created</th>
                                <th>Certain Factor</th>
                                <th>Feedback</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.data.results.map((r,k) =>
                                <tr key={"v"+k}>
                                    <td >{r.createdAt}</td>
                                    <td className={r.resultTest > 0.2? "text-danger": "text-success"}>{r.resultTest}</td>
                                    <td>{r.feedback}</td>
                                </tr>
                            )
                            }
                            </tbody>
                        </Table>
                    </div>
            }
        </>
    );
};