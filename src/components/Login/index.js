import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn, sendFlashMessage } from '../../actions';
import routes, { err } from '../../constants';
import { Header } from '../Common';
import { logger } from '../../constants/logger';
import { Panel } from 'react-bootstrap';

class LoginPage extends Component {
	static propTypes = {
		flash: PropTypes.func.isRequired,
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired,
		user: PropTypes.object,
		signIn: PropTypes.func.isRequired
	};

	static defaultProps = {
		user: null
	};

	constructor(props) {
		super(props);
		logger.info('Login props:', this.props);
		this.state = {
			email: (this.props.user && this.props.user.email) || '',
			password: '',
			rememberMe: false
		};
	}

	onChange = e => this.setState({ [e.target.id]: e.target.value });

	onClick = () => this.setState({ rememberMe: !this.state.rememberMe });

	onSubmit = async e => {
		e.preventDefault();
		const { email, password, rememberMe } = this.state;
		const { flash } = this.props;
		try {
			if (!email) return flash('Please enter your email');
			if (!password) return flash('Please enter your password');
			const { user } = await this.props.signIn(email, password, rememberMe);
			logger.info('Signed in user:', user);
			this.props.history.push('/');
			return flash(`Welcome ${user.name}!`, 'green');
		} catch (error) {
			return flash(err(error));
		}
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className="section">
				<div className="section-container">
					<Header message="Login" />
					<h3>Login</h3>

					<Panel>
						<form onSubmit={this.onSubmit}>
							<Panel.Body>
								<input
									type="text"
									name="email"
									id="email"
									placeholder="Email"
									value={email}
									onChange={this.onChange}
								/>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									value={password}
									onChange={this.onChange}
								/>
								<br />
								<br />
								<input type="submit" value="Sign In" />
								<br />
								<br />
								<input
									type="checkbox"
									name="remember"
									onClick={this.onClick}
								/>{' '}
								Remember Me
								<br />
								<br />
								Forgot your password?{' '}
								<a href={routes.FORGOT_PASSWORD}>Click Here</a>
							</Panel.Body>
						</form>
					</Panel>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state.sessionState
});

export default connect(
	mapStateToProps,
	{ signIn, flash: sendFlashMessage }
)(LoginPage);
