import { React } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export function NavbarHacedor() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => { 
        setAuth({});
        navigate('/login');
    }

    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">BeBoldP2P Hacedor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/consultar_servicio">Encontrar Servicios</Link>
                        </Nav>
                        <Nav>
                        <Nav.Link onClick={logout} href="#logout">
                            Cerrar Sesion
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}