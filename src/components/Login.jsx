import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

import axios from '../api/axios';

import { Form, Button } from "react-bootstrap";

const LOGIN_URL = '/ingresar';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();
    const rolRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const rol = rolRef.current.value;

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email: user, password: pwd, rol }),
                {
                    headers: { 'Content-Type': 'application/json' }
                });
            console.log(JSON.stringify(response?.data))

            const status = response?.data?.status;
            const userid = response?.data?.id;

            if (status === "valid") {
                setAuth({ user, pwd, rol, userid });
                setUser('');
                setPwd('');
                navigate(from, { replace: true});
            } else if (status === "invalid_user") {
                setErrMsg('El correo ingresado es invalido.');
                errRef.current.focus();
            } else if (status === "invalid_password") {
                setErrMsg('La constraseña ingresada es invalida.');
                errRef.current.focus();
            } else if (status === "invalid_rol") {
                setErrMsg('El rol ingresada es invalido.');
                errRef.current.focus();
            }

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing data.');
            } else if (err.response?.status === 401) {
                setErrMsg('unauth.');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();

        }
    }

    return (
        <>
                <Form onSubmit={handleSubmit}>

                    <p ref={errRef} className={errMsg ? "errorNotification" : "offscreen"} aria-live="assertive"> {errMsg} </p>

                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="rolInput">Rol</Form.Label>
                        <Form.Select ref={rolRef} id="rolInput">
                            <option value="cliente">Cliente</option>
                            <option value="hacedor">Hacedor</option>

                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="emailInput">Email</Form.Label>
                        <Form.Control
                            id="emailInput"
                            ref={userRef}
                            type="email"
                            placeholder="Ingrese el email"
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="passwordInput">Contraseña</Form.Label>
                        <Form.Control
                            id="passwordInput"
                            type="password"
                            placeholder="Ingrese el email"
                            autoComplete="off"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Ingresar
                    </Button>
                </Form>
        </>
    )
}

export default Login;