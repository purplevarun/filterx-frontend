import React from 'react';

const Contact = () => {
	const link =
		'https://docs.google.com/forms/d/e/1FAIpQLSfaN3AtrhjYb14hp_ZU17sY4jf9zo3QhwLLR1ZD6eUfrvqo5g/viewform?usp=sf_link';
	function download(url) {
		const a = document.createElement('a');
		a.href = url;
		a.download = url.split('/').pop();
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
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
			<br />
			<br />
			<button
				className="btn btn-sm btn-primary"
				onClick={() => download('filterx-poster.pdf')}
			>
				Download Poster
			</button>
			<br />
			<br />
			<button
				className="btn btn-sm btn-warning"
				onClick={() => download('filterx-sticker.png')}
			>
				Download Sticker
			</button>
			<br />
			<br />
			<button
				className="btn btn-sm btn-danger"
				onClick={() => download('filterx-certificate.png')}
			>
				Download Certificate
			</button>
		</div>
	);
};

export default Contact;
