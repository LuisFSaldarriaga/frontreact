import { React, useRef} from "react";
import useAuth from "../hooks/useAuth";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function RegisterCliente() {
    const { auth } = useAuth();

    const navigate = useNavigate();


    const name = useRef();
    const document = useRef();
    const direccion = useRef();
    const email = useRef();
    const password = useRef();


    const handleIniciarSesion = () => {
        navigate('/login', { replace: true })
    };

    return (

        <>
            <Container className="backPanel d-flex justify-content-center align-items-center flex-column my-5">
                <h3 className="mt-3">Registrarse como Cliente</h3>
                <Form >

                    <Form.Group className="mb-3" controlId="RCName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el nombre completo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RCDocument">
                        <Form.Label>Documento</Form.Label>
                        <Form.Control type="number" placeholder="ingrese el numero de documento" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RCDireccion">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese la direccion" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RCEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese el email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese la contraseña" />
                    </Form.Group >

                    <Form.Group className="d-flex mb-3 justify-content-center align-items-center" >
                        <Button className="submitButton" variant="secondary" type="submit">
                            Registrarse
                        </Button>
                    </Form.Group>
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

    );
}