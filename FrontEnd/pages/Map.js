import React, { useState} from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./App.css";
import InputName from "./inputName"
import InputIp from "./inputIp"
import Table from "./table";
import About from "./about"


function Test({ location }) {
  const map = useMap();
  if (location) {
    map.flyTo(location, 13, {duration: 3.5})
  };
}

export default function App() {
  const [loc, setLoc] = useState([41.92, 14.22]);
  const [json, setJosn] = useState('');


  function showAbout() {
    let about = document.getElementById("aboutDiv")
    if (about.style.visibility == 'visible') {
      about.style.visibility = 'hidden';
    } else {
      about.style.visibility = 'visible';
    }
  }

  return (
    <>
      <nav className="navBar">
        <InputIp Loc={setLoc} json={setJosn}> </InputIp>

        <InputName Loc={setLoc} json={setJosn} ></InputName>

        <a className="navBar-Link" onClick={showAbout} >About</a>
      </nav>

      <MapContainer center={loc} zoom={12} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Test location={loc}/>
      </MapContainer>

      <Table ip={json['query']} city={json['city']} country={json['country']} isp={json['isp']} ></Table>

      <About></About>
    </>
  );
}
