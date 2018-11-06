import React from 'react';
import { Table, Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MembersAttendedTable = ({ members }) => (
	<React.Fragment>
		<hr />

		<h3>Members Attended</h3>
		<Panel>
			<Table bordered hover className="table-clickable panel-body sortableTable">
				<thead>
					<tr>
						<th>Member</th>
						<th>Year</th>
						<th># Attended Events</th>
					</tr>
				</thead>
				<tbody>
					{members.map(member => (
						<tr key={member._id}>
							<td>{member.name}</td>
							<td>{member.graduationYear}</td>
							<td>{member.events ? member.events.length : 0}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Panel>
	</React.Fragment>
);

MembersAttendedTable.propTypes = {
	members: PropTypes.array.isRequired
};

export default MembersAttendedTable;
