import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, TileLayer, Popup, Circle } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { fetchResidences } from '../actions';

class HeatMap extends Component {
	componentDidMount() {
		this.props.fetchResidences();
	}

	addressPoints() {
		return this.props.residences.map((residence) => {
			return [residence.latitude, residence.longitude, residence.residents];
		});
	}

	renderPopups() {
		return this.props.residences.map((residence) => {
			return (
				<Circle
					key={residence.id}
					opacity={0.1}
					radius={35}
					center={[residence.latitude, residence.longitude]}
				>
					<Popup>
						Postal Code: {residence.postalCode} <br />
						House Number: {residence.houseNumber} <br />
						Residents: {residence.residents} <br />
						Latitude: {residence.latitude} <br />
						Longitude: {residence.longitude} <br />
					</Popup>
				</Circle>
			);
		});
	}

	render() {
		return (
			<React.Fragment>
				<h2>Heat Map</h2>
				<Map center={[44.410670,26.077700]} zoom={5}>
					<HeatmapLayer
						fitBoundsOnLoad
						fitBoundsOnUpdate
						points={this.addressPoints()}
						longitudeExtractor={(m) => m[1]}
						latitudeExtractor={(m) => m[0]}
						intensityExtractor={(m) => parseFloat(m[2])}
						max={8}
					/>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
					{this.renderPopups()}
				</Map>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return { residences: Object.values(state.residences) };
};

export default connect(mapStateToProps, { fetchResidences })(HeatMap);
