import React from 'react';
import './About.css';
const About = () => {
	return (
		<div className="About">
			<p>
				We collect cigarette butts across India. We have 1000+ members
				to help us for collecting butts to save the environment and also
				get fees for the services.
			</p>
			<div style={{ width: '100%', height: '4vh' }} />
			<h1>Core Team Members</h1>
			<p style={{ fontSize: '20px' }}>Reeshab Kushwaha (CFO)</p>
			<p style={{ fontSize: '20px' }}>Bikash Mahato (CEO)</p>

			<div style={{ width: '100%', height: '4vh' }} />
			<p style={{ fontSize: '25px' }}>
				Business Hours : 9AM - 6PM (Monday to Friday)
			</p>

			<h3 style={{ color: 'green' }}># We do not promote smoking</h3>
		</div>
	);
};

export default About;
