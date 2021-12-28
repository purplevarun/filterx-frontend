import React from 'react';
import './Common.css';
import { Image } from 'react-bootstrap';
const Home = () => {
	return (
		<div className="HomeBody">
			<div className="content">
				<strong>
					Let’s take one step towards decreasing pollution, saving our
					environment by recycling cigarette butts.
				</strong>

				<h4 style={{ color: 'green' }}>
					#The solution is less pollution
				</h4>
			</div>
			<video autoPlay muted loop className="myvid">
				<source src="bg-cigg.mp4" type="video/mp4" />
			</video>
			<br /> <br />
			<div
				style={{
					textAlign: 'center',
					color: 'black',
					fontSize: '20px',
				}}
			>
				<p>Become a member</p>
				<p>
					<button className="btn btn-lg">
						Download our Playstore Application
						<Image src="icons8-google-play-240.png" width={30} />
					</button>
				</p>
			</div>
			<div className="content">
				<h1>Our Impact</h1>
				<br />
				<Image src="impact1.png" width={'100%'} />
				<br />
				<br />
				<h1>Our Work</h1>
				<p>
					We collect cigarette butts across India. We have 1000+
					members to help us for collecting butts to save the
					environment and also get fees for the services.
				</p>
				<h2 style={{ color: 'green' }}>
					Join our movement and be the change!
				</h2>
				<h1>Our Partners</h1>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-evenly',
						}}
					>
						<Image src="comp1.png" width={'200px'} />
						<Image src="comp2.png" width={'200px'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
