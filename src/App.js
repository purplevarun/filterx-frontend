import logo from './logo.svg';
import './Components/Common.css';
import './bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<div className="Main">
					<Routes>
						<Route path="/" element={<Home />} exact />
						<Route path="/services" element={<Services />} exact />
					</Routes>
				</div>

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
