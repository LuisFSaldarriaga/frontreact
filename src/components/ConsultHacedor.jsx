import { React } from "react";
import { Form, Button, Container, InputGroup } from "react-bootstrap";

export function ConsultHacedor() {

    return (

        <>
            <Container className="my-2">
                <h3>Ingrese el dato de busqueda:</h3>
                <Form>

                    <Form.Group className="mb-3" controlId="CHId">
                        <Form.Label>Numero de Identificacion: </Form.Label>
                        <Form.Control type="number" placeholder="Ingrese el nombre completo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="CHDocument">
                        <Form.Label >
                            Documento
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>C.C.</InputGroup.Text>
                            <Form.Control type="number" placeholder="Ingrese el documento" />
                        </InputGroup>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="CHEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese el email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Buscar Coincidencia
                    </Button>
                </Form>

            </Container>

        </>

    )
}