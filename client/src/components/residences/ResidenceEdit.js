import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchResidence, editResidence } from '../../actions';
import ResidenceForm from './ResidenceForm';

class ResidenceEdit extends React.Component {
	componentDidMount() {
		this.props.fetchResidence(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		this.props.editResidence(this.props.match.params.id, formValues);
	};

	render() {
		if (!this.props.residence) {
			return <div className="ui text loader active">Loading</div>;
		}
		return (
			<div>
				<h2>Edit Residence</h2>
				<ResidenceForm
					initialValues={_.pick(
						this.props.residence,
						'postalCode',
						'houseNumber',
						'latitude',
						'longitude',
						'residents'
					)}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { residence: state.residences[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchResidence, editResidence })(
	ResidenceEdit
);
