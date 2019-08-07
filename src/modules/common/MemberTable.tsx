import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils';
import { hasPermission } from '../../utils/session';
import { Member } from 'src/@types';

interface Props {
	members: Member[];
	push: (route: string) => void;
	user: Member;
}

export default class MemberTable extends Component<Props> {
	static defaultProps = { user: null };

	onClick = id => () => this.props.push(`/member/${id}`);

	render() {
		const { members, user } = this.props;
		return (
			<div className="panel panel-default">
				<table className="table table-bordered table-hover table-clickable panel-body sortableTable">
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
								<tr
									key={member._id}
									id={member._id}
									onClick={this.onClick(member._id)}
								>
									{hasPermission(user, 'members') && (
										<td className="member-icon">
											<img
												src={member.picture}
												alt=""
												className="member-icon"
											/>
										</td>
									)}
									<td>{member.name}</td>
									<td>{member.graduationYear}</td>
									<td>{formatDate(member.createdAt)}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		);
	}
}
