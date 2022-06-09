import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

export const ModalTest = ({nameTest, descriptionTest}) => {
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Más Información!
            </Button>
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{nameTest}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{descriptionTest}</Modal.Body>
                <Modal.Footer>
                    
                    <Button variant="success" onClick={handleClose}>
                        Responder Test!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
