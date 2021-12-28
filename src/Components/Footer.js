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
				<a href="https://www.facebook.com/profile.php?id=100076276040227">
					<button className="btn btn-lg">
						<Image src="icons8-facebook-64.png" width={35} />
					</button>
				</a>

				<a href="https://youtube.com/channel/UC4itTh8nf6U1o7UmR8VMToA">
					<button className="btn btn-lg">
						<Image src="icons8-youtube-64.png" width={35} />
					</button>
				</a>

				<a href="https://twitter.com/Contactfilterx?t=JtBBZdMEm8bC0H6vN6cFeg&s=09">
					<button className="btn btn-lg">
						<Image src="icons8-twitter-64.png" width={35} />
					</button>
				</a>

				<a href="https://www.linkedin.com/in/filter-x-b89166229">
					<button className="btn btn-lg">
						<Image src="icons8-linkedin-64.png" width={35} />
					</button>
				</a>
			</p>
			<p>
				<button className="btn" style={{ color: 'white' }}>
					Download our app from the Google Playstore
					<Image src="icons8-google-play-240.png" width={35} />
				</button>
			</p>
		</div>
	);
};

export default Footer;
