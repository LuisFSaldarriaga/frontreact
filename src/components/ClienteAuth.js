import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { NavbarCliente } from "./NavbarCliente";

const ClienteAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    function isCliente(){
        if (auth?.rol==="cliente") {
            console.log(auth?.rol)
            return true;
        } else {
            return false;
        }
    };

    return(
        isCliente()
            ?<><NavbarCliente /><Outlet /></>
            :<Navigate to="/unauth" state={{ from: location}} replace />
    );
}

export default ClienteAuth;