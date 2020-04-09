import React from 'react';
import '../styles/Modal.scss';

const Modal = ({name, longDesc, img}) => {

  return (

    <section id="modalCard" className="modal noMostrar">

      <div id="modalCard">
        <div id="modalTitle">
          <h1>{name}</h1>
        </div>
        <div id="modalImg">
          <img src={img} alt={name} />
        </div>
        <div id="modalDescription">
          <p>{longDesc}</p>
        </div>
        <div><button id="cerrarModal">cerrar</button></div>
      </div>

    </section>

  )
}

export default Modal;