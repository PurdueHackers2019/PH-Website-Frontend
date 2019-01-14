import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmail } from 'validator';
import { sendFlashMessage, clearFlashMessages, forgotPassword } from '../../actions';
import { err } from '../../constants';
import { Header } from '../Common';
import { logger } from '../../constants/logger';
import { Panel, InputGroup, FormControl, Button } from 'react-bootstrap';

class ForgotPasswordPage extends Component {
	static propTypes = {
		flash: PropTypes.func.isRequired,
		clear: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = { email: '' };
	}

	onChange = e => this.setState({ [e.target.id]: e.target.value });

	onSubmit = async e => {
		e.preventDefault();
		const { email } = this.state;
		const { flash, clear } = this.props;
		try {
			clear();
			if (!email || !isEmail(email)) return flash('Please provide a valid email');
			flash('Please wait...', 'green');
			const response = await forgotPassword(email);
			logger.info('Response:', response);
			return flash(response, 'green');
		} catch (error) {
			clear();
			logger.error('EditProfile Page error:', error);
			return flash(err(error));
		}
	};

	render() {
		const { email } = this.state;
		return (
			<div className="section">
				<div className="section-container">
					<Header message="Forgot Password" />
					<h3>Forgot Your Password</h3>
					<Panel>
						<form className="validate" onSubmit={this.onSubmit}>
							<Panel.Body>
								<InputGroup>
									<InputGroup.Addon inline id="email">
										Email:
									</InputGroup.Addon>
									<FormControl
										type="email"
										id="email"
										placeholder="Email"
										value={email}
										onChange={this.onChange}
									/>
									<InputGroup inline className="input-group-btn">
										<Button bsStyle="primary" type="submit">
											Reset Password
										</Button>
									</InputGroup>
								</InputGroup>
							</Panel.Body>
						</form>
					</Panel>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({ ...state.sessionState });

export default connect(
	mapStateToProps,
	{
		flash: sendFlashMessage,
		clear: clearFlashMessages
	}
)(ForgotPasswordPage);
