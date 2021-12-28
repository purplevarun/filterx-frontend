import React from 'react';
import './Services.css';
import { Image } from 'react-bootstrap';
const Services = () => {
	return (
		<div className="services">
			<div>
				<Image src="serv.png" width={'60%'} />
			</div>
			<div>
				<br />
				<h1>Process of our work with customers</h1>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						fontSize: '25px',
					}}
				>
					<p>Download our Application from PlayStore</p>
					<p>
						<Image src="icons8-down-arrow-64.png" />
					</p>
					<p>Sign Up / Sign In</p>
					<p>
						<Image src="icons8-down-arrow-64.png" />
					</p>
					<p>Complete our profile</p>
					<p>
						<Image src="icons8-down-arrow-64.png" />
					</p>
					<p>Get VBins</p>
					<p>
						<Image src="icons8-down-arrow-64.png" />
					</p>
					<p>Collect Butts</p>
					<p>
						<Image src="icons8-down-arrow-64.png" />
					</p>
					<p>Auto Pickup / Appeal for Pickup</p>
					<p>
						<Image src="icons8-down-arrow-64.png" />
					</p>
					<p>Get Paid</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
