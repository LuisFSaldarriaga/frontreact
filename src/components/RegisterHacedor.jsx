import { React } from "react";
import { Form, Button, Container, InputGroup } from "react-bootstrap";

export function RegisterHacedor() {

    return (

        <>

            <Container className="my-2">

                <Form>

                    <Form.Group className="mb-3" controlId="RHName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el nombre completo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RHDocument">
                        <Form.Label >
                            Documento
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>C.C.</InputGroup.Text>
                            <Form.Control type="number" placeholder="Ingrese el documento" />
                        </InputGroup>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RHDireccion">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese la direccion" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RHEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese el email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RHPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese la contraseña" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RHType">
                        <Form.Label>Trabajo</Form.Label>
                        <Form.Select aria-label="typeService">
                            <option selected disabled>Seleccione su trabajo...</option>
                            <option value="electricidad">electricista</option>
                            <option value="mecanica">mecanico</option>
                            <option value="limpieza">limpiador</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RHWorkarea">
                        <Form.Label>Area de trabajo</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su ciudad de trabajo" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Registrarse
                    </Button>
                </Form>

            </Container>

        </>

    )
}