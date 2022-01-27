import { useContext } from "react";
import Auth from "../Auth/Auth";
import MapView from "../Map/MapView";
import { useUserContext } from "../../context/userContext";

const Home = () => {

    const { user, loading, error } = useUserContext();

    console.log(error);
    console.log(user);
    console.log(loading);

    return (
        <div>
            <video className="bg-video" playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop"><source src="../../../public/assets/mp4/bg.mp4" type="video/mp4" /></video>
            <div className="masthead">
                <div className="masthead-content text-white">
                    <div className="container-fluid px-4 px-lg-0">
                        <h1 className="fst-italic lh-1 mb-4">Catastro Riberalta</h1>
                        <p className="mb-5">Bienvenido al Visor Técnico del Colegio de Topógrafos de Riberalta</p>

                        <Auth />
                        
                        {/* {error && <p>{error}</p>} */}
                        {/* {loading ? <h2>Loading..</h2> : <>{user ? <MapView /> : <Auth />}</>} */}
                        
    
                    </div>
                        
                </div>
            </div>
            <div className="social-icons">
                <div className="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                    <a className="btn btn-dark m-3" href="#!"><i class="fab fa-twitter"></i></a>
                    <a className="btn btn-dark m-3" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a className="btn btn-dark m-3" href="#!"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Home;
        
        
