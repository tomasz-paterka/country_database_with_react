import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import DevTools from '../DevTools';

const Navigation = props => (
	<div>
		<nav className="navbar navbar-expand-lg navbar-light">
			<Link className="navbar-brand" to="/">Countries.js</Link>
			<div clasName="collapse navbar-collapse">
				<ul className="navbar-nav">
					<li className="nav-link"><Link to="/countries">Countries</Link></li>
					<li className="nav-link"><Link to="/continents">Continents</Link></li>
					<li className="nav-link"><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
		</nav>
		<div className="container-fluid">
			{props.children}
		</div>
		<DevTools />
	</div>
);

export default Navigation;