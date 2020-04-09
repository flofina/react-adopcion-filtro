import React from 'react';
import '../styles/Main.scss';

import mainImg from '../assets/images/main-img.PNG';

const Main = () => {
  
  return (

    <main id="intro">
		<div className="texto">
			<h2>Adopta un gatito</h2>
			<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
			<p>Quidem eligendi tenetur laboriosam quos maxime
				explicabo quasi omnis esse veniam obcaecati dolorem, enim fuga ad saepe cum est hic voluptatem facilis
				necessitatibus debitis sequi perspiciatis possimus autem. Temporibus quam id inventore laboriosam
				repudiandae
				modi blanditiis porro sint ullam, distinctio commodi, accusantium aut! Voluptatem totam, dolor doloribus
				id
				distinctio obcaecati inventore velit temporibus architecto quis! Ducimus, doloremque ipsa exercitationem
				quibusdam in neque alias autem omnis architecto.</p>
		</div>
		<div className="img">
			<img src={mainImg} alt="gatito" />
		</div>
	</main>

  )
}

export default Main;