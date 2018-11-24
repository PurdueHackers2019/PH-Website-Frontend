import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { memberMatches, formatDate, err } from '../../constants';
import {
	fetchMember,
	fetchMemberEvents,
	fetchMemberJobs,
	addJob,
	deleteJob,
	sendFlashMessage,
	clearFlashMessages
} from '../../actions';
import {
	SocialMediaPanel,
	EventsAttendedTable,
	ProfilePanel,
	CustomRedirect,
	Header
} from '../Common';
import { logger } from '../../constants/logger';
import { Table, Panel, FormControl, Button } from 'react-bootstrap';
import * as DatePicker from 'react-bootstrap-date-picker';

// TODO: Add autocomplete to input tags

class MemberPage extends Component {
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string
			})
		}).isRequired,
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired,
		flash: PropTypes.func.isRequired,
		clear: PropTypes.func.isRequired,
		user: PropTypes.shape({
			permissions: PropTypes.array
		})
	};

	static defaultProps = { user: null };

	constructor(props) {
		super(props);
		this.state = {
			member: null,
			events: [],
			jobs: [],
			memberMatched: memberMatches(this.props.user, this.props.match.params.id),
			notFound: false,
			name: '',
			city: '',
			start: '',
			end: ''
		};
		logger.info('MemberPage props:', this.props);
	}

	componentDidMount = () => {
		const {
			match: {
				params: { id }
			},
			flash
		} = this.props;
		fetchMember(id)
			.then(member => {
				logger.info('MemberPage fetched member:', member);
				member ? this.setState({ member }) : this.setState({ notFound: true });
			})
			.catch(() => this.setState({ notFound: true }));

		fetchMemberEvents(id)
			.then(events => {
				logger.info('MemberPage fetched events:', events);
				this.setState({ events });
			})
			.catch(error => flash(err(error)));
		fetchMemberJobs(id)
			.then(jobs => {
				logger.info('MemberPage fetched jobs:', jobs);
				this.setState({ jobs });
			})
			.catch(error => flash(err(error)));
	};

	componentWillReceiveProps = nextProps => {
		const {
			match: {
				params: { id }
			},
			flash
		} = nextProps;
		fetchMember(id)
			.then(member => {
				logger.info('MemberPage fetched member:', member);
				member ? this.setState({ member }) : this.setState({ notFound: true });
			})
			.catch(() => this.setState({ notFound: true }));

		fetchMemberEvents(id)
			.then(events => {
				logger.info('MemberPage fetched events:', events);
				this.setState({ events });
			})
			.catch(error => flash(err(error)));
		fetchMemberJobs(id)
			.then(jobs => {
				logger.info('MemberPage fetched jobs:', jobs);
				this.setState({ jobs });
			})
			.catch(error => flash(err(error)));
	};

	onChange = e => this.setState({ [e.target.id]: e.target.value });

	onEventClick = id => () => this.props.history.push(`/event/${id}`);

	onJobClick = id => () => this.props.history.push(`/location/${id}`);

	onAddJob = async e => {
		e.preventDefault();
		const { name, city, start, end } = this.state;
		const {
			flash,
			clear,
			match: {
				params: { id }
			}
		} = this.props;
		try {
			clear();
			logger.info('About to add new location:', name, city, start.toString(), end);
			if (!name) return flash('Location Name Required.');
			if (!city) return flash('City Required.');
			if (!start) return flash('Start Date Required.');
			const startDate = Date.parse(start);
			const endDate = Date.parse(end);
			if (Number.isNaN(startDate)) return flash('Invalid start date');
			logger.info('StartDate:', startDate);
			logger.info('EndDate:', endDate);
			if (end) {
				if (Number.isNaN(endDate)) return flash('Invalid end date');
				if (startDate > endDate) return flash('Start date must be before end date');
			}
			flash('Adding Job Record...', 'green');
			const job = await addJob({
				name,
				city,
				start,
				end,
				memberID: id
			});
			logger.info('Created job:', job);
			this.setState({
				jobs: [...this.state.jobs, job],
				name: '',
				city: '',
				start: '',
				end: ''
			});
			return flash('Job Record Added!', 'green');
		} catch (error) {
			clear();
			logger.error(error);
			return flash(err(error));
		}
	};

	onDeleteJob = async e => {
		e.preventDefault();
		e.stopPropagation();
		const { flash, clear, history, match } = this.props;
		clear();
		try {
			logger.info('About to delete job:');
			const job = await deleteJob(e.target.id);
			logger.info('Deleted job:', job);
			this.setState({ jobs: this.state.jobs.filter(j => j._id !== job._id) });
			history.push(`/member/${match.params.id}`);
			return flash('Job Record Removed!', 'green');
		} catch (error) {
			logger.error(error);
			return flash(err(error));
		}
	};

	render() {
		const {
			member,
			events,
			jobs,
			memberMatched,
			notFound,
			name,
			city,
			start,
			end
		} = this.state;
		if (notFound) return <CustomRedirect msgRed="Member not found" />;
		if (!member) return <span>Loading...</span>;
		return (
			<div>
				<Header message={member.name} />
				<div className="section">
					<div className="section-container">
						<h3>
							Member - {member.name}
							{memberMatched && (
								<React.Fragment>
									<Link to={`/member/${member._id}/edit`} className="pull-right">
										<Button type="button" bsStyle="primary" bsSize="small">
											Edit Profile
										</Button>
									</Link>
									{/* <Link to={routes.PROJECTS} className="pull-left">
										<button type="button" className="btn btn-primary btn-sm">
											Projects
										</button>
									</Link> */}
								</React.Fragment>
							)}
						</h3>

						<ProfilePanel
							member={member}
							events={events ? events.length : 0}
							jobs={jobs ? jobs.length : 0}
						/>

						{(member.facebook ||
							member.github ||
							member.linkedin ||
							member.devpost ||
							member.website ||
							member.linktoresume) && <SocialMediaPanel member={member} />}

						<hr />

						<h3>Job History</h3>
						<Panel>
							<Panel.Body>
								<Table bordered hover className="table-clickable">
									<thead>
										<tr>
											<th>Company</th>
											<th>City</th>
											<th>Start Date</th>
											<th>End Date</th>
										</tr>
									</thead>
									<tbody>
										{jobs && jobs.length ? (
											jobs.map((job, i) => (
												<tr
													key={i}
													onClick={this.onJobClick(job.location._id)}
												>
													<td>{job.location.name}</td>
													<td>{job.location.city}</td>
													<td>{formatDate(job.start)}</td>
													<td>
														{job.end ? formatDate(job.end) : 'Current'}
														{memberMatched && (
															<Button
																id={job._id}
																bsStyle="danger"
																bsSize="small"
																className="pull-right"
																onClick={this.onDeleteJob}
															>
																Remove
															</Button>
														)}
													</td>
												</tr>
											))
										) : (
											<tr>
												<td>No Job History</td>
												<td />
												<td />
												<td />
											</tr>
										)}

										{memberMatched && (
											<tr>
												<td>
													<FormControl
														type="text"
														name="name"
														id="name"
														placeholder="Location Name"
														className="locationsautocomplete"
														value={name}
														onChange={this.onChange}
													/>
												</td>
												<td>
													<FormControl
														type="text"
														name="city"
														id="city"
														placeholder="City"
														className="citiesautocomplete"
														value={city}
														onChange={this.onChange}
													/>
												</td>
												<td>
													<FormControl
														type="date"
														name="start"
														id="start"
														placeholder="Start Date"
														componentClass="datepicker"
														value={start}
														onChange={this.onChange}
													/>
												</td>
												<td>
													<FormControl
														type="date"
														name="end"
														id="end"
														placeholder="End Date (Optional)"
														componentClass="datepicker"
														value={end}
														onChange={this.onChange}
													/>
													<br />
													<Button
														type="submit"
														value="Add Location Record"
														bsStyle="primary"
														className="pull-right"
														onClick={this.onAddJob}
													/>
												</td>
											</tr>
										)}
									</tbody>
								</Table>
							</Panel.Body>
						</Panel>

						<hr />

						<h3>Events Attended</h3>
						<EventsAttendedTable events={events} push={this.props.history.push} />
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
	{ flash: sendFlashMessage, clear: clearFlashMessages }
)(MemberPage);
