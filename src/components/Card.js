import React from 'react';
import '../styles/Card.scss';

import Button from './Button';

const Card = ({name, shortDesc, img, available}) => {
    
  return (

    <div className={available ? 'card' : 'cardDisabled'}>

      <div className="cardImg">
        <img src={img} alt={name} />
      </div>

      <div className="cardInfo">
        <div className="cardTitle">
          <h2>{name}</h2>
        </div>
        <div className="cardDescription">
          <p>{shortDesc}</p>
        </div>
        <Button mensaje={available ? 'Ver Mas' : 'No disponible'}/>
      </div>

    </div>

  )
}

export default Card;