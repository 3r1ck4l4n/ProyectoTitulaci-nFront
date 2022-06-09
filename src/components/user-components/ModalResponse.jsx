import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const ModalResponse = ({message, result}) => {
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className="w-75 mx-auto">
            <Button variant={result > 0.6 ? "danger" : result > 2 ? "warning" : "success"}
                    onClick={handleShow}
                    className="d-block mx-auto w-50 mt-3">
                {result > 0.6 ? "Cuidado! Ver más... " : result > 2 ? "Precaución! Ver más... " : "Excelente! Ver más..."}
            </Button>
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Resultado: </Modal.Title>
                </Modal.Header>
                <Modal.Body>Feedback: {message}</Modal.Body>
                <Modal.Body>Factor de certeza: {result}</Modal.Body>
                <Modal.Footer>
                
                    {result > 0.6 &&
                        <NavLink to="/expert-sys/chat">
                            <Button variant={"danger"} onClick={handleClose}>
                                Aceptar
                            </Button>
                        </NavLink>
                        
                    }
                
                    {result < 0.6 && result > 0 &&
                        <NavLink to="/expert-sys/chat">
                            <Button variant={"warning"} onClick={handleClose}>
                                Aceptar
                            </Button>
                        </NavLink>
                    }
                
                    {result < 0 &&
                        <Button variant={"success"} onClick={handleClose}>
                            Aceptar
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        </div>
    );
};