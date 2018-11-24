import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AES from 'crypto-js/aes';
import ENC from 'crypto-js/enc-utf8';
import {
	fetchCredentials,
	addCredential,
	deleteCredential,
	sendFlashMessage,
	clearFlashMessages
} from '../../actions';
import { err } from '../../constants';
import { Header } from '../Common';
import { logger } from '../../constants/logger';
import { Table, Panel, FormControl, Button, ControlLabel } from 'react-bootstrap';

class CredentialsPage extends Component {
	static propTypes = {
		flash: PropTypes.func.isRequired,
		clear: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			credentials: [],
			site: '',
			username: '',
			password: '',
			description: ''
		};
	}

	componentDidMount = async () => {
		const { flash, clear } = this.props;
		try {
			clear();
			const { credentials, secret } = await fetchCredentials();
			credentials.forEach(
				credential =>
					(credential.password = AES.decrypt(credential.password, secret).toString(ENC))
			);
			logger.info('Fetched credentials:', credentials, secret);
			this.setState({ credentials });
		} catch (error) {
			logger.error('Credentials error:', error);
			flash(err(error));
		}
	};

	onChange = e => this.setState({ [e.target.id]: e.target.value });

	onAddCredential = async e => {
		e.preventDefault();
		const { flash, clear } = this.props;
		const { site, username, password, description } = this.state;
		try {
			clear();
			if (!site || !username || !password)
				return flash('Error: Please provide site, username, and password');

			const { credential, secret } = await addCredential({
				site,
				username,
				password,
				description
			});

			credential.password = AES.decrypt(credential.password, secret).toString(ENC);

			this.setState({
				credentials: [...this.state.credentials, credential],
				site: '',
				username: '',
				password: '',
				description: ''
			});
			return flash(`Success: Added credentials for ${credential.site}`, 'green');
		} catch (error) {
			return flash(err(error));
		}
	};

	onDeleteCredential = async e => {
		e.preventDefault();
		const { flash, clear } = this.props;
		try {
			clear();
			const credential = await deleteCredential(e.target.id);
			this.setState({
				credentials: this.state.credentials.filter(cred => cred._id !== credential._id)
			});
			return flash(`Success: Deleted credentials for ${credential.site}`, 'green');
		} catch (error) {
			return flash(err(error));
		}
	};

	render() {
		const { credentials, site, username, password, description } = this.state;
		return (
			<div className="section">
				<div className="section-container">
					<Header message="Credentials" />
					<h3>Credentials</h3>
					<Panel>
						<Panel.Body>
							<Table bordered className="sortableTable">
								<thead>
									<tr>
										<th>Site</th>
										<th>Username</th>
										<th>Password</th>
										<th>Description</th>
									</tr>
								</thead>
								<tbody>
									{credentials.map(credential => (
										<tr key={credential._id}>
											<td>{credential.site}</td>
											<td>{credential.username}</td>
											<td className="obscure">{credential.password}</td>
											<td>
												{credential.description}
												<button
													className="btn btn-xs btn-danger pull-right"
													id={credential._id}
													onClick={this.onDeleteCredential}
												>
													Delete
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Panel.Body>
						<form className="validate">
							<Panel.Body>
								<ControlLabel htmlFor="site">
									Site
									<FormControl
										id="site"
										type="text"
										name="site"
										placeholder="Site"
										value={site}
										onChange={this.onChange}
									/>
								</ControlLabel>
								<ControlLabel htmlFor="username">
									Username
									<FormControl
										id="username"
										type="text"
										name="username"
										placeholder="Username"
										value={username}
										onChange={this.onChange}
									/>
								</ControlLabel>
								<ControlLabel htmlFor="password">
									Password
									<FormControl
										id="password"
										type="text"
										name="password"
										placeholder="Password"
										value={password}
										onChange={this.onChange}
									/>
								</ControlLabel>
								<ControlLabel htmlFor="description">
									Description
									<FormControl
										id="description"
										type="text"
										name="description"
										placeholder="Description"
										componentClass="textarea"
										value={description}
										onChange={this.onChange}
									/>
								</ControlLabel>
								<br />
								<Button
									type="submit"
									bsStyle="primary"
									bsSize="small"
									onClick={this.onAddCredential}
								>
									Add Credential
								</Button>
							</Panel.Body>
						</form>
					</Panel>
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	{ flash: sendFlashMessage, clear: clearFlashMessages }
)(CredentialsPage);
