import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { NavbarHacedor } from "./NavbarHacedor";

const HacedorAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    function isHacedor(){
        if (auth?.rol==="hacedor") {
            return true;
        } else {
            return false;
        }
    };

    return(
        isHacedor()
            ?<><NavbarHacedor /><Outlet /></>
            :<Navigate to="/unauth" state={{ from: location}} replace />
    );
}

export default HacedorAuth;