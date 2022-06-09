import React from 'react';
import {Button, FloatingLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const FormRegister = ({props}) => {
    
    const {touched, values, handleChange, handleSubmit, errors} = props;
    
    return (
            <Form noValidate onSubmit={e => handleSubmit(e)}>
                <FormGroup className="w-100 my-3">
                    <FloatingLabel controlId="floatingEmail" label="Email">
                        <Form.Control name="email" type="email" placeholder="name@example.com"
                                      value={values.email}
                                      onChange={handleChange}
                                      isInvalid={errors.email}
                                      isValid={touched.email && !errors.email}
                                      required>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.email}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </FloatingLabel>
                </FormGroup>
    
                <FormGroup className="w-100 my-3">
                    <FloatingLabel controlId="floatingUsername" label="Username">
                        <Form.Control name="username" type="text" placeholder="Juan Pérez"
                                      value={values.username}
                                      onChange={handleChange}
                                      isInvalid={errors.username}
                                      isValid={touched.username && !errors.username}
                                      required>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.username}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </FloatingLabel>
                </FormGroup>
    
                <FormGroup className="w-100 my-3">
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
    
                <FormGroup className="w-100 my-3">
                    <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password">
                        <Form.Control name="confirmPassword" type="password" placeholder="**********"
                                      value={values.confirmPassword}
                                      onChange={handleChange}
                                      isInvalid={errors.confirmPassword}
                                      isValid={touched.confirmPassword && !errors.confirmPassword}
                                      required>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid" tooltip>
                            {errors.confirmPassword}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </FloatingLabel>
                </FormGroup>
    
                <FormGroup className="w-100 my-3">
                    <Form.Check
                        className="text-dark"
                        required
                        name="psych"
                        label="Are you psychologist?"
                        value={values.psych}
                        onChange={handleChange}
                        id="validationFormik106"
                        type="checkbox"
                    />
                </FormGroup>
    
                {   values.psych&&
                    <FormGroup className="w-100 my-3">
                        <FloatingLabel controlId="floatingProfNumber" label="Profesional ID">
                            <Form.Control name="numProf" type="text" placeholder=""
                                          value={values.numProf}
                                          onChange={handleChange}
                                          isInvalid={errors.numProf}
                                          isValid={touched.numProf && !errors.numProf}
                                          >
                            </Form.Control>
                        </FloatingLabel>
                    </FormGroup>
                }
                
                <p className="text-dark">Do you have an account? <NavLink to="/login" className="nav-link d-inline">Login</NavLink></p>
                <Button variant="primary" type="submit" className="d-block mx-auto mt-3">Register</Button>
            </Form>
    );
};
