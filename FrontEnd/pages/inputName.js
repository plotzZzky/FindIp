import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import "./App.css";


library.add(faMagnifyingGlass)

function InputName(props) {
    const [Name, setName] = useState('');

    function getInfoName() {
        let url = "http://127.0.0.1:5000/api/ip/name=" + Name
        fetch(url).then(res => res.json())
        .then((data) => {
          props.Loc([data['lat'], data['lon']])
          props.json(data)
        });
      }
    
    function checkName() {
        getInfoName()
        let table = document.getElementById('Table')
        table.style.visibility = "visible";
    }

    return (
        <div className="align-input" id='inputNameDiv'>
            <input type={Text} placeholder="Buscar pelo endereço" onChange={ (e) => setName(e.target.value) } id="InputName"></input>
            <button className="input-btn" onClick={() => { checkName() }}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
        </div>
    );
}

export default InputName