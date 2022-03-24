import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const HacedorAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    function isHacedor(){
        if (auth?.rol==="hacedor") {
            console.log(auth?.rol)
            return true;
        } else {
            return false;
        }
    };

    return(
        isHacedor()
            ?<Outlet />
            :<Navigate to="/unauth" state={{ from: location}} replace />
    );
}

export default HacedorAuth;