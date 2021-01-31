import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn, sendFlashMessage } from '../../actions';
import routes, { err } from '../../constants';
// import { Header } from '../Common';

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
		console.log('Login props:', this.props);
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
			console.log('Signed in user:', user);
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
					{/* <Header message="Login" /> */}
					<h3>Login</h3>

					<div className="panel panel-default">
						<form className="panel-body" onSubmit={this.onSubmit}>
							<br />
							<div className="form-group row">
								<div className="col-sm-3 col-sm-offset-2 text-right">Email:</div>
								<div className="col-sm-4">
									<input
										type="text"
										id="email"
										className="form-control"
										placeholder="Email"
										value={email}
										onChange={this.onChange}
									/>
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-3 col-sm-offset-2 text-right">Password:</div>
								<div className="col-sm-4">
									<input
										type="password"
										id="password"
										className="form-control"
										placeholder="Password"
										value={password}
										onChange={this.onChange}
									/>
								</div>
							</div>
							<div className="form-group row">
								<div className="col-sm-offset-5 col-sm-10">
									<div className="checkbox">
										<label htmlFor="remember">
											<input type="checkbox" onClick={this.onClick} /> Remember me
										</label>
									</div>
								</div>
							</div>
							<input type="submit" className="btn btn-primary" value="Sign In" />
							<br />
							<br />
							Forgot your password? <a href={routes.FORGOT_PASSWORD}>Click Here</a>
						</form>
					</div>
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
