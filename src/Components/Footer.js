import React from 'react';
import { Image } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
	return (
		<div className="Footer">
			<div>
				<Image src="icons8-copyright-40.png" width={25} /> 2021 &nbsp;
				<strong>www.filterx.live</strong>
			</div>
			<br />
			<p>
				<button className="btn">
					<Image src="icons8-facebook-64.png" width={35} />
				</button>

				<button className="btn">
					<Image src="icons8-whatsapp-64.png" width={35} />
				</button>

				<button className="btn">
					<Image src="icons8-instagram-48.png" width={45} />
				</button>

				<button className="btn">
					<Image src="icons8-gmail-64.png" width={35} />
				</button>

				<button className="btn">
					<Image src="icons8-twitter-64.png" width={35} />
				</button>
			</p>
		</div>
	);
};

export default Footer;
