import React from 'react';
import {URLApiExpertSys} from '../../../envs/apiExpertSys';
import {Button, Card, Spinner} from "react-bootstrap";

import './profie-styles.css';
import {useParams} from "react-router-dom";
import {useFetch} from "../../../services/profile.service";
export const Profile = React.memo(() => {
    
    const {idUser} = useParams();
    
    const data = useFetch(`${URLApiExpertSys}/psych/${idUser}`);
    console.log(data)
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
            {!data.loading&&
                <Card className="mx-auto w-25 mt-5 profile-card p-2 rounded">
                    <Card.Img className="rounded-circle w-75 mx-auto p-4"  variant="top" src="/images/img.png" />
                    <Card.Body>
                        <Card.Title className="text-clear  border-bottom d-block mt-2 pb-2">Psychologist Info:</Card.Title>
                        <ul className="d-block mt-2 text-clear">
                            <li>Name: <span className="text-dark"> {data.data.name} </span> </li>
                            <li>Email: <span className="text-dark"> {data.data.email}</span></li>
                            <li>N° Professional: <span className="text-dark">{data.data.numProf}</span></li>
                        </ul>
                    </Card.Body>
                </Card>}
        </>
    );
})
