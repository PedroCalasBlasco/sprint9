
import { useState } from "react";
import Login from "../Login/Login";
import Sign from "../Sign/Sign";


const Auth = () => {

    const [index, setIndex] = useState(false);
    
    const toggleIndex = () =>{
        setIndex((prevState) => !prevState);
    };

    return (
        <div className="container">
            {!index ? <Login/> : <Sign/>}
            <p onClick={toggleIndex}>
                {!index ? "¿Nuevo Usuario? Haz click aquí" : "¿Ya tienes una cuenta?"}
            </p>
        </div>
    );
};

export default Auth;