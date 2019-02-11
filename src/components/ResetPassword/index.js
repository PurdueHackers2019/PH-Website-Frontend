import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import qs from 'qs';
import { sendFlashMessage, clearFlashMessages, resetPassword } from '../../actions';
import routes, { err } from '../../constants';
import { Header } from '../Common';
import { Panel, Button, ControlLabel, FormControl } from 'react-bootstrap';

class ResetPasswordPage extends Component {
	static propTypes = {
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired,
		location: PropTypes.shape({
			search: PropTypes.string
		}).isRequired,
		flash: PropTypes.func.isRequired,
		clear: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = { password: '', passwordConfirm: '' };
		console.log('ResetPasswordPage props:', this.props);
	}

	onChange = e => this.setState({ [e.target.id]: e.target.value });

	onSubmit = async e => {
		e.preventDefault();
		const { password, passwordConfirm } = this.state;
		const {
			flash,
			clear,
			location: { search },
			history: { push }
		} = this.props;
		try {
			clear();
			const { token } = qs.parse(search, { ignoreQueryPrefix: true });
			if (!password) return flash('A password is required');
			if (!passwordConfirm) return flash('Please confirm your password');
			if (password !== passwordConfirm) return flash('Passwords does not match');
			if (!token) return flash('Must have a valid reset token');
			const response = await resetPassword(password, passwordConfirm, token);
			push(routes.LOGIN);
			return flash(response, 'green');
		} catch (error) {
			console.error('EditProfile Page error:', error);
			return flash(err(error));
		}
	};

	render() {
		const { password, passwordConfirm } = this.state;
		return (
			<div className="section">
				<div className="section-container">
					<Header message="Reset Password" />
					<h3>Reset Your Password</h3>
					<Panel>
						<form onSubmit={this.onSubmit}>
							<Panel.Body>
								<ControlLabel htmlFor="password">
									Password *
									<FormControl
										type="password"
										name="password"
										id="password"
										placeholder="Password"
										value={password}
										onChange={this.onChange}
										required
										data-bvalidator="required"
										data-bvalidator-msg="A password is required"
									/>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="passwordConfirm">
									Confirm Password *
									<FormControl
										type="password"
										name="passwordConfirm"
										id="passwordConfirm"
										value={passwordConfirm}
										onChange={this.onChange}
										required
										placeholder="Confirm Password"
										data-bvalidator="required,equalto[password]"
										data-bvalidator-msg="Password does not match"
									/>
								</ControlLabel>
								<span className="input-group-btn">
									<Button bsStyle="primary" type="submit">
										Reset Password
									</Button>
								</span>
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
)(ResetPasswordPage);
