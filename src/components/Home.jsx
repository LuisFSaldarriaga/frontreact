import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/index');
    }

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
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home