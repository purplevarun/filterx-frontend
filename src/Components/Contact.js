import React from 'react';

const Contact = () => {
	const link =
		'https://docs.google.com/forms/d/e/1FAIpQLSfaN3AtrhjYb14hp_ZU17sY4jf9zo3QhwLLR1ZD6eUfrvqo5g/viewform?usp=sf_link';
	return (
		<div style={{ textAlign: 'center' }}>
			<div style={{ width: '100%', height: '5vh' }} />
			<h1>Get in touch with us</h1>
			<br />
			<br />
			<button
				className="btn btn-lg btn-success"
				onClick={() => (window.location.href = link)}
			>
				Send us a message
			</button>
		</div>
	);
};

export default Contact;
