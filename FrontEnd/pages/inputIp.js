import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import "./App.css";


library.add(faMagnifyingGlass)

function InputIp(props) {
    const [Ip, setIp] = useState('None');


    function getInfoIp() {
      let url = "http://127.0.0.1:5000/api/ip=" + Ip
      fetch(url).then(res => res.json())
      .then((data) => {
        props.Loc([data['lat'], data['lon']])
        props.json(data)
      });
    }

    function checkIp() {
      getInfoIp()
      let table = document.getElementById('Table')
      table.style.visibility = "visible";
    }
    
    useEffect(() => {
        getInfoIp()
    }, []);


    return (
        <div className="align-input">
          <input type={Text} placeholder="Buscar pelo ip" onChange={ (e) => setIp(e.target.value) }></input>
          <button className="input-btn" onClick={() => { checkIp() }}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
    );
}

export default InputIp