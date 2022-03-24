import { React } from "react";
import { Link } from "react-router-dom"

export function Unauthorized(){

    return(

        <>
            <h1>Acceso no autorizado.</h1>
            <br />
            <Link to="/">Go to the Home</Link>
        </>
    
    )
}