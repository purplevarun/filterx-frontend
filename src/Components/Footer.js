import React from 'react';
import { Image } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
	return (
		<div className="Footer">
			<div>
				<Image src="icons8-copyright-40.png" width={25} /> 2021 &nbsp;
				<strong>FilterX</strong>
				<br />
				<sm>
					A unit of Kushwaha Cybertech Pvt. Ltd. (CIN NO.
					U72900WB2018PTC229234){' '}
				</sm>
			</div>
			<br />
			<p>
				<button
					className="btn "
					onClick={() =>
						(window.location.href =
							'https://www.facebook.com/profile.php?id=100076276040227')
					}
				>
					<Image src="icons8-facebook-64.png" width={35} />
				</button>

				<button
					className="btn "
					onClick={() =>
						(window.location.href =
							'https://youtube.com/channel/UC4itTh8nf6U1o7UmR8VMToA')
					}
				>
					<Image src="icons8-youtube-64.png" width={35} />
				</button>

				<button
					className="btn "
					onClick={() =>
						(window.location.href =
							'https://twitter.com/Contactfilterx?t=JtBBZdMEm8bC0H6vN6cFeg&s=09')
					}
				>
					<Image src="icons8-twitter-64.png" width={35} />
				</button>

				<button
					className="btn "
					onClick={() =>
						(window.location.href =
							'https://www.linkedin.com/in/filter-x-b89166229')
					}
				>
					<Image src="icons8-linkedin-64.png" width={35} />
				</button>

				<button
					className="btn "
					onClick={() =>
						(window.location.href =
							'https://www.instagram.com/p/CYDhbjULG0w/')
					}
				>
					<Image src="icons8-instagram-96.png" width={40} />
				</button>
			</p>
			<p>
				<button
					className="btn"
					style={{ color: 'white' }}
					onClick={() =>
						(window.location.href = 'https://google.com')
					}
				>
					Download our app from the Google Playstore
					<Image src="icons8-google-play-240.png" width={35} />
				</button>
			</p>
			<div>
				+91 7679837582
				<br />
				Vidhyawati Bhawan, Aradanga, Asansol - 713303.
				<br />
				West Bengal, India.
			</div>
			<div
				className="credit"
				onClick={() =>
					(window.location.href =
						'https://www.linkedin.com/in/purplevarun/')
				}
			>
				Made by Varun Kedia
			</div>
		</div>
	);
};

export default Footer;
