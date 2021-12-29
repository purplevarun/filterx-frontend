import logo from './logo.svg';
import './Components/Common.css';
import './bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import { useEffect } from 'react';
function App() {
	useEffect(() => {
		document.title = 'FilterX';
	});
	return (
		<>
			<BrowserRouter>
				<Header />
				<div className="Main">
					<Routes>
						<Route path="/" element={<Home />} exact />
						<Route path="/services" element={<Services />} exact />
						<Route path="/about-us" element={<About />} exact />
						<Route path="/blog" element={<Blog />} exact />
						<Route path="/contact-us" element={<Contact />} exact />
					</Routes>
				</div>

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
