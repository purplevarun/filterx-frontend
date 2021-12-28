import React from 'react';
import './Services.css';
const Services = () => {
	return (
		<div className="services">
			<div>
				<h2>A dialogue on Environment</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum
				</p>
			</div>
			<div>
				<h2>Process of our work with customers</h2>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				>
					<li>Download Application</li>
					<li>Sign Up</li>
					<li>Complete your profile</li>
					<li>Get --</li>
					<li>Collect Butts</li>
					<li>Apply for pickup</li>
					<li>Get paid</li>
				</div>
			</div>
		</div>
	);
};

export default Services;
