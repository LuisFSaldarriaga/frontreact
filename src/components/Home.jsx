import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";


const Home = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();

    function isRol(){
        if (auth?.rol==="hacedor") {
            console.log(auth?.rol)
            navigate('/consultar_servicio');
        } else if (auth?.rol==="cliente") {
            console.log(auth?.rol)
            navigate('/solicitar_servicio');
        };
    };

    useEffect(() => {
        isRol();
    }, [isRol]);

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/solicitar_servicio">Go to the solicitar servicio</Link>
            <br />
            <Link to="/consultar_hacedor">Go to the consultar hacedor</Link>
            <br />
            <Link to="/consultar_servicio">Go to the consultar servicio</Link>
            <br />
            <Link to="/index">Go to the index</Link>
            <div className="flexGrow">
                
            </div>
        </section>
    )
}

export default Home