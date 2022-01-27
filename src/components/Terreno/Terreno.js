import { useParams} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from 'react';

import StyledTerreno from "./terreno.styled";

const Terreno = () => {

    const { id } = useParams();
    const [terreno, setTerreno] = useState({});

    useEffect(() => {
        axios.get(`https://www.hades.palomar.org.es/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite%3Aterrenosvista19&maxFeatures=50&outputFormat=application%2Fjson`).then(res =>{
            setTerreno(res.data.features[id]);
            console.log(res.data.features[id]);
        });
    },[id])



    return(
        <div className="container-fluid TerrenoCont">
            <div className="row">
                <div className="col col-12">
                    <h3>HOLA A TODOS</h3>
                </div>
                <div className="row">
                    <div className="col">
                        {/* <h3>{terreno.properties.agua}</h3> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terreno;