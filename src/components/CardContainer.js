import React from 'react';
import Card from './Card';
import '../styles/CardContainer.scss';

const CardContainer = ({ gatos }) => {

  return (

    <div className="cardsContainer">
      {
        gatos.map((gato, i) => 
          <Card
          key={i}
          name={gato.name}
          shortDesc={gato.shortDesc}
          img={gato.img}
          available={gato.available} />
        )
      }
    </div>
  )
}

export default CardContainer;