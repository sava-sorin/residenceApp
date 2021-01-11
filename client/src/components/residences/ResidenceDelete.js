import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchResidence, deleteResidence } from '../../actions';

class ResidenceDelete extends Component {
	componentDidMount() {
		this.props.fetchResidence(this.props.match.params.id);
	}

	renderActions() {
		const { id } = this.props.match.params;

		return (
			<React.Fragment>
				<button
					onClick={() => this.props.deleteResidence(id)}
					className="ui button negative"
				>
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	renderContent() {
		return 'Are you sure you want to delete this Residence?';
	}

	render() {
		return (
			<Modal
				title="Delete Residence"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { residence: state.residences[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchResidence, deleteResidence })(
	ResidenceDelete
);
