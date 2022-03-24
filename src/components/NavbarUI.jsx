import { React } from "react";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import useAuth from "../context/useAuth";

export function NavbarUI() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => { 
        // setAuth({});
        // navigate('/login');
    }

    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">BeBoldP2P</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Registro" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/registrar_cliente">Registro Cliente</NavDropdown.Item>
                                <NavDropdown.Item href="/registrar_hacedor">Registro Hacedor</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/consultar_hacedor">Detalles de hacedor</Nav.Link>
                            <Nav.Link href="/solicitar_servicio">Solicitar Servicio</Nav.Link>
                            <Nav.Link href="/consultar_servicio">Encontrar Servicios</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link onClick={logout} href="#memes">
                            Cerrar Sesion
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}