import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/Home/Home";
import Sign from "./components/Sign/Sign";
import MapView from "./components/Map/MapView";
import Terreno from "./components/Terreno/Terreno";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                {/* <Route path="/SignOn" element={<Sign/>}></Route> */}
                <Route path="/map" element={<MapView/>}></Route>
                <Route path="/map/:id" element={<Terreno/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;