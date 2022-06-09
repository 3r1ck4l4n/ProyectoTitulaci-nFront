import React from 'react';
import {Card, Form} from "react-bootstrap";

export const Question = ({answers, idQuestion, questionStatement, handleChange}) => {
    return (
        <>
            <Card className="col-3 my-4">
                <Card.Header>
                    {questionStatement}
                </Card.Header>
                <Card.Body>
                {answers.map((answer, k) => {
                    return (
                        
                            <Form.Check
                                key={`${k * idQuestion}`}
                                type={'radio'}
                                name={`question${idQuestion}`}
                                onChange={handleChange}
                                value={answer.certainFactor}
                                label={answer.answerStatement}
                                required
                            />
                        
                    )
                })}
                </Card.Body>
            </Card>
        </>
    );
};