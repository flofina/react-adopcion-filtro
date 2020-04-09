import React, { useState } from 'react';
import '../styles/Form.scss';

import CardContainer from '../components/CardContainer';
import gatos from '../assets/gatos';


const Form = () => {

  const [gatosFiltrados, setGatosFiltrados] = useState([...gatos]);

  const [state, setState] = useState({
    color: [],
    extras: [],
    sexo: '',
    nombre: '',
    tel: ''
  })

  const handleChange = e => {
    
    if (Array.isArray(state[e.target.name])) {
      setState({...state, [e.target.name]: [...state[e.target.name], e.target.value]})
    }
    else {
      setState({...state, [e.target.name]: e.target.value})
    };

    if (e.target.name === 'sexo') {
      setGatosFiltrados(gatos.filter(gato => (
        e.target.value === 'm' || e.target.value === 'f' ? gato.sex === e.target.value : gato)));
    };

    if (e.target.name === 'color') {
      setGatosFiltrados(gatos.filter(gato => (
        e.target.name === [e.target.value] ? gato.color === [e.target.value] : gato)));
    };
  };

  console.log(state)

  return (

    <>
      <div className="forms">
        <form action="" method="get">
          <div className="formCheckboxes">
            <label className="labelDescr">Selecciona el color:</label>
            <div>
              <input type="checkbox" name="color" onChange={handleChange} value="negro" />negro
              <input type="checkbox" name="color" onChange={handleChange} value="blanco" />blanco
              <input type="checkbox" name="color" onChange={handleChange} value="atigrado" />atigrado
              <input type="checkbox" name="color" onChange={handleChange} value="gris" />gris
              <input type="checkbox" name="color" onChange={handleChange} value="naranja" />naranja
              <input type="checkbox" name="color" onChange={handleChange} value="i" />indistinto
            </div>
          </div>
          <div className="formCheckboxes">
            <label className="labelDescr">Extras:</label>
            <div>
              <input type="checkbox" name="extras" onChange={handleChange} value="vacunado" />vacunado
              <input type="checkbox" name="extras" onChange={handleChange} value="desparasitado" />desparasitado
            </div>
          </div>
          <div className="formRadios">
            <label className="labelDescr">Selecciona el sexo:</label>
            <div>
              <input type="radio" name="sexo" id="sexo" onChange={handleChange} value="f" />femenino
              <input type="radio" name="sexo" id="sexo" onChange={handleChange} value="m" />masculino
              <input type="radio" name="sexo" id="sexo" onChange={handleChange} value="i" />indistinto
            </div>
          </div>
          <div className="formContacto">
            <label className="labelDescr">Ingresa tus datos de contacto:</label>
            <div>
              <input type="text" name="nombre" id="nombre" onChange={handleChange} placeholder="nombre" value={state.nombre} />
              <input type="text" name="tel" id="tel" onChange={handleChange} placeholder="telefono" value={state.tel} />
              <input type="submit" value="enviar" />
            </div>
          </div>
        </form>
      </div>

      <CardContainer gatos={gatosFiltrados} />

    </>
  )
}

export default Form;