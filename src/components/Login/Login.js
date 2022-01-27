import { useContext, useRef } from "react";

const Login = () => {

    const emailRef = useRef();
    const psdRef = useRef();

    const { signInUser, forgotPassword } = useContext();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = psdRef.current.value;
        if (email && password) signInUser(email, password);
    };

    const forgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if (email) forgotPassword(email).then(() => (emailRef.current.value = ""))
    };

// 

    return (
       <div className="form">
           <p>Haz Login</p>
           <form onSubmit={onSubmit()}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">$</span>
                    </div>
                    <input type="email" className="form-control" placeholder="Ingresa tu Email" ref={emailRef} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">$</span>
                    </div>
                    <input type="password" className="form-control" placeholder="Ingresa Contraseña" ref={psdRef} />
                </div>

                <button type="submit" className="btn btn-primary">ENTRAR</button>
                <p onClick={forgotPasswordHandler}>¿Has Olvidado la Contraseña?</p>
            </form>
       </div> 
            
    )
}

export default Login;