import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	Navbar,
	BecomeSeller,
	Services,
	Advertise,
	Guidelines,
	About,
	Contact,
	PrivacyPolicy,
} from './components';

function App() {
	return (
		<>
			{/* <Navbar /> */}

			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<BecomeSeller />} />
					<Route path="services" element={<Services />} />
					<Route path="advertise" element={<Advertise />} />
					<Route path="guidelines" element={<Guidelines />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="privacy-policy" element={<PrivacyPolicy />} />
				</Route>
			</Routes>
			{/* <Services /> */}
		</>
	);
}

export default App;
