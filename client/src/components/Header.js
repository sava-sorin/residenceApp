import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item">
				Residences
			</Link>
			<div className="right menu">
				<Link to="/heatmap" className="ui orange button">
					<i className="fire icon" />
					Map
				</Link>
			</div>
		</div>
	);
};

export default Header;
