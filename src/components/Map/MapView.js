import {useState, useEffect} from 'react';

import {MapContainer, TileLayer, GeoJSON, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from "axios";
import hash from 'object-hash';

import StyledMap from './map.styled';
import { featureGroup } from 'leaflet';


const MapView = () => {

    const [listTerrenos, setListTerrenos] = useState([]);

    useEffect(() => {
        axios.get(`https://www.hades.palomar.org.es/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite%3Aterrenosvista19&maxFeatures=50&outputFormat=application%2Fjson`).then(res =>{
            console.log(res.data.features);
            setListTerrenos(res.data.features);
            // setListNaus((prevNaus) => prevNaus.concat(res.data.results));
        });
        
    },[]);

    // const onEachFeature = () => {
    // //     cons
    // // }




    return (
        <StyledMap>
            <MapContainer center={{lat: '-11.0045', lng: '-66.0636'}} zoom={16} className='mapCont'>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
                {
                    listTerrenos.map((item,index) => {
                        return (
                        <GeoJSON data={listTerrenos[index]} key={hash(listTerrenos) + index} eventHandlers={{click:(e) => {
                        console.log(hash(listTerrenos)) }}}>
                            <Popup>
                                <h5>{"Código Catastral: " + listTerrenos[index].properties.codigo}</h5>
                                <a href={`/map/${index}`}>Ver Más</a> 
                            </Popup> 
                        </GeoJSON>
                        )
                    }) 
                }
                {/* <GeoJSON data={listTerrenos[0]} key={hash(listTerrenos) + "1"} eventHandlers={{click:(e) => {
                    console.log(hash(listTerrenos)) }}}>
                    {/* <Popup>
                        <h5>{listTerrenos.features[0].properties.codigo}</h5>
                    </Popup> */}
                {/* </GeoJSON> */}
            </MapContainer> */}
        </StyledMap>

    );
        
}

export default MapView;