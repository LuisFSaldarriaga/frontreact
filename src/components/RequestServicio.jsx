import { React, useState, useRef, useEffect } from "react";
import { Form, Button, Container, InputGroup, Modal } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export function RequestServicio() {
    toast.configure();

    const { auth } = useAuth();

    const [show, setShow] = useState(false);
    const [types, setTypes] = useState([]);
    const [user, setUser] = useState();


    const typeRef = useRef();
    const descryptionRef = useRef();
    const valueRef = useRef();

    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); };

    useEffect(() => {
        fetch("http://localhost:8080/tiposervicio/disponibles", {
            method: "GET",

        })
            .then((response) => response.json())
            .then((response) => {
                if (!response.err) {
                    setTypes(response);
                } else {

                }
            })
            .catch((error) => console.log(error));

    }, []);

    const getUserData = () => {

        const email = auth?.user;
        const password = auth?.pwd;

        fetch("http://localhost:8080/clientes/ingresar", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                email,
                password
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (!response.err) {
                    setUser(response);
                    handleShow();
                } else {

                }
            })
            .catch((error) => console.log(error));
    };

    const handleRequestService = async () => {

        var payload = "";
        const type = typeRef.current.value;
        const descryption = descryptionRef.current.value;
        const value = valueRef.current.value;
        const status = "pairing";

        payload = JSON.stringify({
            type,
            descryption,
            value,
            status,
            cliente: user
        })


        fetch("http://localhost:8080/servicios/solicitar", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: payload
        })
            .then((response) => response.json())
            .then((response) => {
                if (!response.err) {
                    const id = response.id;
                    toast.success("Servicio Solicitado Satisfactoriamente con la id: "+id , {
                        position: "top-right",
                        autoClose: 5000,
                        closeOnClick: true,
                        draggable: true,
                        hideProgressBar: false
                    });
                } else {

                }
            })
            .catch((error) => console.log(error));
    };

    const handleRegister = async () => {handleRequestService();};

    const handleContinue = async () => {
        handleRegister();
        handleClose();
        navigate("/solicitar_servicio");  
    };

    return (

        <>
            <Container className="my-2">
            <Modal size="lg" show={show} onHide={handleClose}>
                    <form>
                        <Modal.Header className="modalHeader justify-content-center">
                            <Modal.Title>Incribir Solicitud de Servicio</Modal.Title>
                        </Modal.Header>
                        <Modal.Body
                            className="modalBody textFormatDefault requestModal"
                            style={{
                                maxHeight: "calc(100vh - 210px)",
                                overflowY: "auto",
                            }}
                        >   
                        <br />
                            ¿Estas seguro acerca de solicitar el servicio?
                        </Modal.Body>
                        <Modal.Footer className="d-flex modalFooter justify-content-between">
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button onClick={handleContinue}>Continuar</Button>

                        </Modal.Footer>
                    </form>
                </Modal>
                <Form>

                    <Form.Group className="mb-3" controlId="RSType">
                        <Form.Label>Tipo de servicio</Form.Label>
                        <Form.Select defaultValue="null" aria-label="typeService" ref={typeRef} >
                            <option value="null" disabled>Seleccione el tipo de servicio...</option>
                            {
                                types.map((type) => {
                                    return (
                                        <option key={type} value={type}>{type}</option>
                                    );
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RSDescryption"  >
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" ref={descryptionRef} placeholder="Ingrese una descripcion del servicio solicitado..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RSValue">
                        <Form.Label >
                            Valor
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control type="number" placeholder="Ingrese el valor" ref={valueRef} />
                        </InputGroup>
                    </Form.Group>

                    <Button variant="primary" onClick={getUserData} >
                        Solicitar
                    </Button>

                </Form>

            </Container>
        </>

    )
}