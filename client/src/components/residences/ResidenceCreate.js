import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createResidence } from '../../actions';
import ResidenceForm from './ResidenceForm';

class ResidenceCreate extends Component {
	onSubmit = (formValues) => {
		this.props.createResidence(formValues);
	};

	render() {
		return (
			<div>
				<h2>New Residence</h2>
				<ResidenceForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createResidence })(ResidenceCreate);
