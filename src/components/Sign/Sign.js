import { useRef } from "react";
import { useUserContext } from "../../context/userContext";


const Sign = () => {

    const emailRef = useRef();
    const nameRef = useRef();
    const psdRef = useRef();

    const { registerUser } = useUserContext();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = psdRef.current.value;
        if(email && name && password) registerUser(email, name, password);
    };



    return (
       <div className="form">
           <p>Registro</p>
           <form onSubmit={onSubmit()}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">$</span>
                    </div>
                        <input type="text" className="form-control" placeholder="Nombre" ref={nameRef} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">$</span>
                    </div>
                        <input type="email" className="form-control" placeholder="Dirección Email" ref={emailRef} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">$</span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password" ref={psdRef} />
                </div>

                <button type="submit" className="btn btn-primary">Registrarme</button>
            </form>                        
         </div>
    );
}

export default Sign;