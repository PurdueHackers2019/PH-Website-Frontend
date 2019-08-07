import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

class FlashMessage extends Component {
	static propTypes = {
		msgGreen: PropTypes.string,
		msgRed: PropTypes.string
	};

	static defaultProps = {
		msgGreen: '',
		msgRed: ''
	};

	render = () => (
		<React.Fragment>
			{this.props.msgGreen && (
				<div className="section alert-section" style={{ paddingTop: 0 }}>
					<div className="section-container">
						<Alert bsStyle="success" role="alert">
							{this.props.msgGreen}
						</Alert>
					</div>
				</div>
			)}
			{this.props.msgRed && (
				<div className="section alert-section" style={{ paddingTop: 0 }}>
					<div className="section-container">
						<Alert bsStyle="danger" role="alert">
							{this.props.msgRed}
						</Alert>
					</div>
				</div>
			)}
		</React.Fragment>
	);
}

const mapStateToProps = state => ({
	...state.flashState
});

export default connect(mapStateToProps)(FlashMessage);
