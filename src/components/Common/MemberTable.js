import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { formatDate, hasPermission } from '../../constants';

export default class extends Component {
	static propTypes = {
		members: PropTypes.array.isRequired,
		push: PropTypes.func.isRequired,
		user: PropTypes.object
	};

	static defaultProps = { user: null };

	onClick = id => () => this.props.push(`/member/${id}`);

	render() {
		const { members, user } = this.props;
		return (
			<Panel>
				<Table bordered hover className="table-clickable panel-body sortableTable">
					<thead>
						<tr>
							{hasPermission(user, 'members') && <th>Picture</th>}
							<th>Name</th>
							<th>Year</th>
							<th>Joined</th>
						</tr>
					</thead>
					<tbody>
						{members &&
							members.map(member => (
								<tr key={member._id} id={member._id} onClick={this.onClick(member._id)}>
									{hasPermission(user, 'members') && (
										<td className="member-icon">
											<img src={member.picture} alt="" className="member-icon" />
										</td>
									)}
									<td>{member.name}</td>
									<td>{member.graduationYear}</td>
									<td>{formatDate(member.createdAt)}</td>
								</tr>
							))}
					</tbody>
				</Table>
			</Panel>
		);
	}
}
