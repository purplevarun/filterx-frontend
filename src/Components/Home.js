import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';
import { Image } from 'react-bootstrap';
const Home = () => {
	return (
		<div className="HomeBody">
			<video autoPlay muted loop id="myvid">
				<source src="bg-cigg.mp4" type="video/mp4" />
			</video>
			<div className="content">
				<h1>Our Impact</h1>
				<br />
				<Image src="impact1.png" width={'100%'} />
				<br />
				<br />
				<h1>Our Partners</h1>
			</div>
		</div>
	);
};

export default Home;
