import React from 'react';
import '../styles/Button.scss';

const Button = ({mensaje}) => {
    
  return (

    <div className="verMas">
      <button>{mensaje}</button>
    </div>

  )
}

export default Button;