import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../../constants';
import { sendFlashMessage, clearFlashMessages, fetchLocations } from '../../actions';
import { Header } from '../Common';
import { Table, Panel, Button } from 'react-bootstrap';

class LocationsPage extends Component {
	static propTypes = {
		flash: PropTypes.func.isRequired,
		clear: PropTypes.func.isRequired,
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			locations: []
		};
	}

	componentDidMount = async () => {
		const { flash, clear } = this.props;
		try {
			clear();
			const locations = await fetchLocations();
			console.log('Fetched locations:', locations);
			this.setState({ locations });
		} catch (error) {
			flash('Whoops! Something went wrong!');
			console.error('LocationsPage error:', error);
		}
	};

	onClick = id => () => this.props.history.push(`/location/${id}`);

	render() {
		const { locations } = this.state;
		return (
			<div className="section">
				<div className="section-container">
					{/* <Header message="Locations" /> */}
					<h3>
						Purdue Hackers Around The Globe
						<Link to={routes.LOCATIONS_MAP} className="pull-right">
							<Button type="button" bsStyle="primary" bsSize="small">
								Map
							</Button>
						</Link>
					</h3>
					<Panel>
						<Panel.Body>
							<Table bordered hover className="table-clickable sortableTable">
								<thead>
									<tr>
										<th>Location</th>
										<th>City</th>
										<th># Members</th>
									</tr>
								</thead>
								<tbody>
									{locations.map(location => (
										<tr key={location._id} onClick={this.onClick(location._id)}>
											<td>{location.name}</td>
											<td>{location.city}</td>
											<td>{location.members.length}</td>
										</tr>
									))}
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
)(LocationsPage);
