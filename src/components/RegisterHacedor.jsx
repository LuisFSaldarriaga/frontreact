import { React, useEffect, useState, useRef } from "react";
import { Form, Button, Container, InputGroup, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import axios from "../api/axios";

export function RegisterHacedor() {
    toast.configure();

    // Estados

    const [show, setShow] = useState(false);
    const [jobsin, setJobsin] = useState('');
    const [jobs, setjobs] = useState([]);

    // Modal Logic

    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); };

    // Navegacion Logic

    const navigate = useNavigate();

    // Referencias

    const nameRef = useRef();
    const documentRef = useRef();
    const direccionRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const workareaRef = useRef();

    // Logica del boton agregar (modal)

    const handleAgregar = () => {
        jobs.push(jobsin);
        setJobsin('');
        toast.success("Agregado Satisfactoriamente", {
            position: "top-center",
            autoClose: 1000,
            closeOnClick: true,
            draggable: true,
            hideProgressBar: false
        });
    };

    // Logica del boton eliminar (modal)

    const handleEliminar = () => {
        const eliminated = jobs[-1];
        jobs.splice(-1, 1);
        setJobsin('');
        toast.success("Eliminado Satisfactoriamente", {
            position: "top-center",
            autoClose: 1000,
            closeOnClick: true,
            draggable: true,
            hideProgressBar: false
        });
    };

    //funcion de registro de trabajos del hacedor

    const handleRegisterJobs = async (hacedorid) => {

        jobs.forEach(type => {
            fetch("http://localhost:8080/tiposervicio/nuevo", {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                    type,
                    hacedorid
                })
            })
                .then((response) => response.json())
                .then((response) => {
                    if (!response.err) {
                        console.log("registered job" + response?.id);

                    } else {

                    }
                })
                .catch((error) => console.log(error));
        })

        toast.success("Registrado Satisfactoriamente!\nahora inicia sesion", {
            position: "top-right",
            autoClose: 3000,
            closeOnClick: true,
            draggable: true,
            hideProgressBar: false
        });
        navigate("/login");

    }

    // funcion registro de hacedor

    const handleRegister = async () => {
        const name = nameRef.current.value;
        const document = documentRef.current.value;
        const direccion = direccionRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const workrange = workareaRef.current.value;
        const job = jobs[0];

        fetch("http://localhost:8080/hacedor/registrar", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                name,
                document,
                direccion,
                email,
                password,
                workrange,
                job
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (!response.err) {
                    const id = response?.id;
                    handleRegisterJobs(id);
                    console.log("registered")
                } else {

                }
            })
            .catch((error) => console.log(error));
    };

    const handleIniciarSesion = () => {
        navigate('/login', { replace: true })
    };

    return (

        <>
            <Container className="backPanel d-flex justify-content-center align-items-center flex-column my-5">
                <h3 className="mt-3">Registrarse como hacedor</h3>
                <Modal size="lg" show={show} onHide={handleClose}>
                    <form>
                        <Modal.Header className="modalHeader justify-content-center">
                            <Modal.Title>Incribir Trabajos</Modal.Title>
                        </Modal.Header>
                        <Modal.Body
                            className="modalBody textFormatDefault registerModal"
                            style={{
                                maxHeight: "calc(100vh - 210px)",
                                overflowY: "auto",
                            }}
                        >
                            <Form.Group className="mb-3" controlId="RHType">
                                <Form.Label>Trabajo</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="email"
                                        placeholder="Ingrese un trabajo"
                                        autoComplete="off"
                                        onChange={(e) => setJobsin(e.target.value)}
                                        value={jobsin}
                                        required />
                                    <Button
                                        id="link2"
                                        className="btn border-0 text-light"
                                        onClick={handleAgregar}
                                    >
                                        Inscribir nuevo trabajo
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                            <p>Trabajos Ingresados:</p>
                            {
                                jobs.map((item) => {         //recorro el state y muestro datos
                                    return (
                                        <p key={item}>
                                            {item}
                                        </p>
                                    )
                                })}
                        </Modal.Body>
                        <Modal.Footer className="d-flex modalFooter justify-content-between">
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button onClick={handleEliminar}>Eliminar</Button>
                            <Button onClick={handleRegister}>Continuar</Button>

                        </Modal.Footer>
                    </form>
                </Modal>
                <Form>

                    <Form.Group className="mb-3" controlId="RHName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Ingrese el nombre completo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RHDocument">
                        <Form.Label >
                            Documento
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>C.C.</InputGroup.Text>
                            <Form.Control ref={documentRef} type="number" placeholder="Ingrese el documento" />
                        </InputGroup>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RHDireccion">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control ref={direccionRef} type="text" placeholder="Ingrese la direccion" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RHEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Ingrese el email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RHPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Ingrese la contraseña" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RHWorkarea">
                        <Form.Label>Area de trabajo</Form.Label>
                        <Form.Control ref={workareaRef} type="text" placeholder="Ingrese su ciudad de trabajo" />
                    </Form.Group>

                    <Button id="submitButton" className="btn" onClick={handleShow}>
                        Registrar
                    </Button>
                </Form>

                <Container className="d-flex mb-3 justify-content-center flex-wrap" >
                    ¿Ya estás registrado? Inicia sesión aquí!
                    <Container className="d-flex mb-3 justify-content-center">
                        <Button className="link2" variant="secondary" onClick={handleIniciarSesion} >
                            Iniciar Sesion
                        </Button>
                    </Container>
                </Container>

            </Container>

        </>

    )
}