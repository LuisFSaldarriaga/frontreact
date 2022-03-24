import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

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
            ?<Outlet />
            :<Navigate to="/unauth" state={{ from: location}} replace />
    );
}

export default ClienteAuth;