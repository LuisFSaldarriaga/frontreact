import { React, useState } from "react";
import { Form, Button, Container, InputGroup, Modal } from "react-bootstrap";

export function RequestServicio() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Container className="my-2">
                <Modal show={show} onHide={handleClose} centered>
                    <form>
                        <Modal.Header className="modalHeader justify-content-center">
                            <Modal.Title>Inscribir nuevo tipo de servicio</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            <input
                                type="text"
                                id="newTypeServicio"
                                className="bg-secondary text-light border-0 rounded-3 form-control-lg form-control"
                                placeholder="Tipo de servicio"
                            />
                        </Modal.Body>
                        <Modal.Footer className="d-flex modalFooter justify-content-between">
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button type="submit" onClick={handleClose}>
                                Registrar
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>


                <Form>

                    <Form.Group className="mb-3" controlId="RSType">
                        <Form.Label>Tipo de servicio</Form.Label>
                        <InputGroup>
                            <Form.Select aria-label="typeService">
                                <option selected disabled>Seleccione el tipo de servicio...</option>
                                <option value="electricidad">electrico</option>
                                <option value="mecanica">mecanico</option>
                                <option value="limpieza">limpieza</option>
                            </Form.Select>
                            <Button
                                id="link2"
                                className="btn border-0 text-light"
                                onClick={handleShow}
                            >
                                Inscribir nuevo tipo
                            </Button>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RSDescryption">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese una descripcion del servicio solicitado..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RSValue">
                        <Form.Label >
                            Valor
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control type="number" placeholder="Ingrese el valor" />
                        </InputGroup>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RSEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese el email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="RSPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese la contraseña" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Solicitar
                    </Button>

                </Form>

            </Container>
        </>

    )
}