import React from 'react';
import {Button, Card, Spinner} from "react-bootstrap";
import './chart-styles.css';
import {PieChartUsers} from "../utils/PieChartUsers";
import {AreaChartRegisters} from "../utils/AreaChartRegisters";
import {useFetch} from "../../services/profile.service";
import {URLApiExpertSys} from '../../envs/apiExpertSys';

export const Statistics = () => {
    let url = `${URLApiExpertSys}/api/result/statistics`;
    
    const response1= useFetch(url);
    
    let data01;
    let data02;
    if (!response1.loading) {
        const {certainFactorGreater, certainFactorLess, countUser} = response1.data;
        data01 = [
            { name: 'User register', value:  !response1.loading?countUser:0 }
        ];
        data02 = [
            { name: 'Certain factor > 0.4', value: !response1.loading?certainFactorGreater:0 },
            { name: 'Certain factor < 0.4', value:  !response1.loading?certainFactorLess:0 }
        ];
    }
    
    url = `${URLApiExpertSys}/api/user/historical`;
    
    const response2 = useFetch(url);
    
    
    return (
        <>
            
                <div className="container d-flex flex-wrap justify-content-around mt-5 pt-3">
                    {
                        response1.loading&&
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
                    {
                        !response1.loading &&
                        <Card className="bg-light col-3  my-2">
                            <Card.Header>Usuarios vs Resultados</Card.Header>
                            <Card.Body>
                                <PieChartUsers data02={data02} data01={data01}/>
                            </Card.Body>
                            <Card.Footer>
                                *Chart only informative.
                            </Card.Footer>
                        </Card>
                    }
    
                    {
                        response1.loading&&
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
                    {
                        !response2.loading &&
                        <Card className="bg-light col-8 my-2">
                            <Card.Header></Card.Header>
                            <Card.Body className="container">
                                <AreaChartRegisters data={response2.data}/>
                            </Card.Body>
                        </Card>
                    }
    
                </div>
            
        </>
    );
};