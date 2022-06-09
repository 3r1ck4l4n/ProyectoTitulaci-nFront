import React from 'react';
import {Button, FloatingLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const FormLogin = ({props}) => {
    
    const {touched, values, handleChange, handleSubmit, errors} = props
    return (
        <Form noValidate onSubmit={e => handleSubmit(e)}>
            <FormGroup className="my-3">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <FormControl type="email" name="email" placeholder="name@example.com"
                                 value={values.email}
                                 onChange={handleChange}
                                 isInvalid={errors.email}
                                 isValid={touched.email && !errors.email}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.email}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                </FloatingLabel>
        
            </FormGroup>
        
            <FormGroup className="mt-3">
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <FormControl type="password" name="password" placeholder="Password"
                                 value={values.password}
                                 onChange={handleChange}
                                 isInvalid={errors.password}
                                 isValid={touched.password && !errors.password}/>
                    <Form.Control.Feedback type="invalid" tooltip>
                        {errors.password}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                </FloatingLabel>
            </FormGroup>
        
            <FormGroup className="mt-4">
                <Form.Check
                    className="text-dark"
                    required
                    name="psych"
                    label="Are you psychologist?"
                    onChange={handleChange}
                    id="validationFormik106"
                    type="checkbox"
                />
            </FormGroup>
            <p className="text-dark mt-2">You do not have an account?<NavLink to="/register" className="nav-link d-inline">Register</NavLink></p>
    
            <Button className="d-block mx-auto mt-3" type="submit">Login</Button>
        </Form>
    );
};


