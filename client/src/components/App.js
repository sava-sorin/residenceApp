import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import ResidenceList from './residences/ResidenceList';
import ResidenceCreate from './residences/ResidenceCreate';
import ResidenceEdit from './residences/ResidenceEdit';
import ResidenceDelete from './residences/ResidenceDelete';
import HeatMap from './HeatMap';
import history from '../history';

import '../assets/styles/global.css';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<Header />
				<Route path="/" exact component={ResidenceList} />
				<Route path="/residences/new" exact component={ResidenceCreate} />
				<Route path="/residences/edit/:id" exact component={ResidenceEdit} />
				<Route path="/heatmap" exact component={HeatMap} />
				<Route
					path="/residences/delete/:id"
					exact
					component={ResidenceDelete}
				/>
			</Router>
		</div>
	);
};

export default App;
