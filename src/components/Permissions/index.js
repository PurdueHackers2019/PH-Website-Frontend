import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hasPermission, err } from '../../constants';
import {
	sendFlashMessage,
	clearFlashMessages,
	fetchPermissions,
	addPermission,
	addOrganizer
} from '../../actions';
import { Header } from '../Common';
import { Table, Panel, Button, FormControl } from 'react-bootstrap';

class PermissionsPage extends Component {
	static propTypes = {
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired,
		flash: PropTypes.func.isRequired,
		clear: PropTypes.func.isRequired,
		user: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			permissions: [],
			permissionName: '',
			permissionDescription: '',
			organizerName: ''
			// loading: true
		};
	}

	componentDidMount = async () => {
		const { flash, clear } = this.props;
		try {
			clear();
			const permissions = await fetchPermissions();
			console.log('Fetched permissions:', permissions);
			this.setState({ permissions });
		} catch (error) {
			console.error('Permissions Page error:', error);
			flash(err(error));
		}
	};

	onPermissionClick = id => () => this.props.history.push(`/permission/${id}`);

	onChange = e => this.setState({ [e.target.id]: e.target.value });

	onAddPermission = async e => {
		e.preventDefault();
		const { flash, clear } = this.props;
		const { permissionName, permissionDescription } = this.state;
		try {
			clear();
			if (!permissionName) return flash('Permission must have name');
			if (!permissionDescription) return flash('Permission must have description');
			const permission = await addPermission({
				name: permissionName,
				description: permissionDescription
			});
			this.setState({
				permissions: [...this.state.permissions, permission],
				permissionName: '',
				permissionDescription: ''
			});
			return flash(`Successfully added permission: ${permission.name}`, 'green');
		} catch (error) {
			console.error('Permissions Page error:', error);
			return flash(err(error));
		}
	};

	onAddOrganizer = async e => {
		e.preventDefault();
		const { flash, clear } = this.props;
		const { organizerName } = this.state;
		try {
			clear();
			if (!organizerName) return flash('Permission must have name');
			const { member, permissions } = await addOrganizer(organizerName);
			console.log('Member:', member);
			console.log('Permissions:', permissions);
			this.setState({ organizerName: '', permissions });
			return flash(`Successfully added organizer: ${member.name}`, 'green');
		} catch (error) {
			console.error('Permissions Page error:', error);
			return flash(err(error));
		}
	};

	render() {
		const { permissions, permissionName, permissionDescription, organizerName } = this.state;
		const { user } = this.props;
		return (
			<div className="section">
				<div className="section-container">
					{/* <Header message="Permissions" /> */}
					<h3>Permissions</h3>
					<Panel>
						<Panel.Body>
							<Table bordered hover className="table-clickable sortableTable">
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th># Users</th>
									</tr>
								</thead>
								<tbody>
									{permissions.map(permission => (
										<tr
											key={permission._id}
											onClick={this.onPermissionClick(permission._id)}
										>
											<td>{permission.name}</td>
											<td>{permission.description}</td>
											<td>
												{permission.members ? permission.members.length : 0}
											</td>
										</tr>
									))}
									{hasPermission(user, 'adminpermissions') && (
										<tr>
											<td>
												<FormControl
													type="text"
													id="permissionName"
													name="permissionName"
													placeholder="Permission Name"
													data-bvalidator="required"
													value={permissionName}
													onChange={this.onChange}
												/>
											</td>
											<td>
												<FormControl
													type="text"
													id="permissionDescription"
													name="permissionDescription"
													placeholder="Permission Description"
													data-bvalidator="required"
													value={permissionDescription}
													onChange={this.onChange}
												/>
											</td>
											<td>
												<Button
													type="submit"
													bsStyle="primary"
													bsSize="small"
													onClick={this.onAddPermission}
												>
													Add Permission
												</Button>
											</td>
										</tr>
									)}
									<tr>
										<td />
										<td>
											<FormControl
												type="text"
												id="organizerName"
												placeholder="Add Organizer"
												className="membersautocomplete"
												data-bvalidator="required"
												value={organizerName}
												onChange={this.onChange}
											/>
										</td>
										<td>
											<Button
												type="button"
												bsSize="small"
												bsStyle="primary"
												onClick={this.onAddOrganizer}
											>
												Add Organizer
											</Button>
										</td>
									</tr>
								</tbody>
							</Table>
						</Panel.Body>
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
	{ flash: sendFlashMessage, clear: clearFlashMessages }
)(PermissionsPage);
