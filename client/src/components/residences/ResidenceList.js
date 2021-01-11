import React from 'react';
import { connect } from 'react-redux';
import { fetchResidences } from '../../actions';
import { Link } from 'react-router-dom';

class ResidenceList extends React.Component {
	componentDidMount() {
		this.props.fetchResidences();
	}

	renderButtons(residence) {
		return (
			<div className="right floated content">
				<Link
					to={`/residences/edit/${residence.id}`}
					className="ui button primary"
				>
					Edit
				</Link>
				<Link
					to={`/residences/delete/${residence.id}`}
					className="ui button negative"
				>
					Delete
				</Link>
			</div>
		);
	}

	renderList() {
		return this.props.residences.map((residence) => {
			return (
				<div className="item" key={residence.id}>
					{this.renderButtons(residence)}
					<i className="large middle aligned icon home" />
					<div className="content">
						Postal Code: {residence.postalCode}
						<div className="description">Number: {residence.houseNumber}</div>
						<div className="description">Residents: {residence.residents}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h2>Residences</h2>
				<Link to="/residences/new" className="ui button primary">
					New Residence
				</Link>
				<div className="ui celled list">{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { residences: Object.values(state.residences) };
};

export default connect(mapStateToProps, { fetchResidences })(ResidenceList);
