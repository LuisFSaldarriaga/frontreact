import { React } from "react";
import { Form, Button, Container } from "react-bootstrap";

export function RegisterCliente() {

    return (

        <>
            <Container className="my-2">

                <Form>

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
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Registrarse
                    </Button>
                </Form>
                
            </Container>
        </>

    );
}