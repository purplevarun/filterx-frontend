import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Image } from 'react-bootstrap';
import './Header.css';
const Header = () => {
	const navigate = useNavigate();
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<div>
						<button className="btn">
							<Navbar.Brand onClick={() => navigate('/')}>
								<Image src="./logo-filterx.jpeg" width={200} />
							</Navbar.Brand>
						</button>
					</div>
					<div>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav
								className="me-auto"
								style={{ marginLeft: 'auto' }}
							>
								<button className="btn btn-lg">
									<Nav.Link
										onClick={() => navigate('/services')}
									>
										Services
									</Nav.Link>
								</button>

								<button className="btn btn-lg">
									<Nav.Link onClick={() => navigate('/blog')}>
										Blog
									</Nav.Link>
								</button>

								<button className="btn btn-lg">
									<Nav.Link
										onClick={() => navigate('/about-us')}
									>
										About Us
									</Nav.Link>
								</button>

								<button className="btn btn-lg">
									<Nav.Link
										onClick={() => navigate('/contact-us')}
									>
										Contact Us
									</Nav.Link>
								</button>
							</Nav>
						</Navbar.Collapse>
					</div>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
