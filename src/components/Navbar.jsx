import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav id="navbar" class="">
				<div class="nav-wrapper">
					<ul id="menu">
						<li>
							<Link to="/">Become a Seller</Link>
						</li>
						<li>
							<Link to="/services">Our Services</Link>
						</li>
						<li>
							<a href="/advertise">Advertise with Us</a>
						</li>
						<li>
							<a href="/guidelines">Guidelines</a>
						</li>
						<li>
							<a href="/about">About Us</a>
						</li>
						<li>
							<a href="/contact">Contact Us</a>
						</li>
						<li>
							<a href="/privacy-policy">Privacy Policy</a>
						</li>
					</ul>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Navbar;
