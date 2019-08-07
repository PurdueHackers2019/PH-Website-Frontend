import React, { Component } from 'react';
import { formatDate } from '../../utils';
import { Event } from 'src/@types';

interface Props {
	events: Event[];
	push: (route: string) => void;
	allowed: boolean;
}

class EventTable extends Component<Props> {
	onClick = id => () => this.props.push(`/event/${id}`);

	render() {
		const { events, allowed } = this.props;
		return (
			<div className="panel panel-default">
				<table className="table table-bordered table-hover table-clickable panel-body sortableTable">
					<thead>
						<tr>
							<th>Name</th>
							<th>Location</th>
							<th>Date</th>
							{allowed && <th># Attended</th>}
						</tr>
					</thead>
					<tbody>
						{events &&
							events.map(event => (
								<tr
									key={event._id + 1}
									id={event._id}
									onClick={this.onClick(event._id)}
								>
									<td>{event.name}</td>
									<td>{event.location}</td>
									<td>{formatDate(event.eventTime)}</td>
									{allowed && (
										<td>
											{event.members && event.members.length
												? event.members.length
												: 'N/A'}
										</td>
									)}
								</tr>
							))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default EventTable;
