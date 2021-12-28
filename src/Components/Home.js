import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';
const Home = () => {
	return (
		<div>
			<video autoPlay muted loop id="myvid">
				<source src="bg-cigg.mp4" type="video/mp4" />
			</video>
			<div className="content">
				<h1>halo</h1>
			</div>
		</div>
	);
};

export default Home;
