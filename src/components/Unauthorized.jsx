import { React } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

export function Unauthorized() {
    const navigate = useNavigate();

    const back = () => navigate("/");

    return (

        <>
            <Container>
                <h1 className="my-4">Acceso no autorizado.</h1>
                
                <Button className="my-2" variant="primary" onClick={back} >
                    Volver
                </Button>
            </Container>
        </>

    )
}