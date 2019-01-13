import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { hasPermission, shortName, err } from '../../constants';
import {
	sendFlashMessage,
	clearFlashMessages,
	fetchEvent,
	createEvent,
	updateEvent,
	deleteEvent
} from '../../actions';
import { CustomRedirect, Header } from '../Common';
import { logger } from '../../constants/logger';
import {
	Panel,
	FormGroup,
	FormControl,
	ControlLabel,
	InputGroup,
	Checkbox,
	Button
} from 'react-bootstrap';

// TODO: Add autocomplete to input tags

class EditEventPage extends Component {
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
		user: PropTypes.object,
		type: PropTypes.string.isRequired
	};

	static defaultProps = {
		user: null
	};

	constructor(props) {
		super(props);
		let date = new Date();
		date.setMinutes(0 - date.getTimezoneOffset());
		date = date.toJSON().slice(0, 10);
		this.state = {
			event: null,
			loading: true,
			name: '',
			privateEvent: false,
			date,
			hour: '',
			minute: '',
			location: '',
			facebook: ''
		};
		logger.info('EditEventPage props:', this.props);
	}

	componentDidMount = async () => {
		const { match, flash, clear, type } = this.props;
		if (type !== 'edit') return this.setState({ loading: false });
		try {
			clear();
			const event = await fetchEvent(match.params.id);
			let date = new Date(event.eventTime);
			const hour = date.getHours();
			const minute = date.getMinutes() || '00';
			date.setMinutes(minute - date.getTimezoneOffset());
			date = date.toJSON().slice(0, 10);
			const { name, privateEvent, location, facebook } = event;
			this.setState({
				event,
				hour,
				minute,
				name,
				privateEvent,
				date,
				location,
				facebook,
				loading: false
			});

			return logger.info('Fetched event:', event);
		} catch (error) {
			logger.info('Edit Event Page error:', error);
			this.setState({ loading: false });
			return flash(err(error));
		}
	};

	onChange = e => this.setState({ [e.target.id]: e.target.value });

	onSubmit = async e => {
		e.preventDefault();
		const { match, flash, clear, history, type } = this.props;
		try {
			clear();
			const { name, privateEvent, hour, minute, date, location, facebook } = this.state;
			if (!name) return flash('Event requires name');
			if (!date) return flash('Event requires date');
			if (!hour || !minute) return flash('Event requires time');
			if (!location) return flash('Event requires location');
			if (facebook && !facebook.match('((http|https)://)?(www[.])?facebook.com.*'))
				return flash('Must specify a url from Facebook');

			const eventTime = new Date(`${date} ${hour}:${minute}`);
			const event = {
				name,
				privateEvent,
				eventTime,
				location,
				facebook
			};
			if (type === 'edit') {
				const newEvent = await updateEvent(match.params.id, event);
				logger.info('Updated event:', newEvent);
				this.setState({ event: newEvent });
				return flash('Event successfully updated', 'green');
			}

			const newEvent = await createEvent(event);
			logger.info('Created new event:', newEvent);
			history.push('/events');
			return flash('Event created', 'green');
		} catch (error) {
			logger.info('Edit Event Page error:', error);
			return flash(err(error));
		}
	};

	onDeleteEvent = async e => {
		e.preventDefault();
		const { match, flash, clear, history } = this.props;
		try {
			clear();
			const event = await deleteEvent(match.params.id);
			logger.info('Deleted event:', event);
			history.push('/events');
			return flash('Successfully deleted event', 'green');
		} catch (error) {
			logger.info('Edit Event Page error:', error);
			return flash(err(error));
		}
	};

	render() {
		const {
			event,
			loading,
			name,
			privateEvent,
			hour,
			minute,
			date,
			location,
			facebook
		} = this.state;
		const { user, type } = this.props;
		if (loading) return <span>Loading...</span>;
		if (!loading && !event && type === 'edit')
			return <CustomRedirect msgRed="Event not found" />;
		if (!hasPermission(user, 'events'))
			return <CustomRedirect msgRed="You are not authorized to edit this event" />;
		const canEdit = type === 'edit' && hasPermission(user, 'events');
		return (
			<div>
				<Header message={shortName(name)} />
				<div className="section">
					<div className="section-container">
						<h3>
							{shortName(name)}
							{canEdit && (
								<Link to={`/event/${event._id}`}>
									<button
										type="button"
										className="pull-left btn btn-primary btn-sm marginR"
									>
										<span
											className="glyphicon glyphicon-chevron-left"
											aria-hidden="true"
										/>
										Event
									</button>
								</Link>
							)}
						</h3>
						<Panel>
							<form className="validate">
								<Panel.Body>
									<ControlLabel htmlFor="privateEvent" className="text-right">
										Private Event ?
										<InputGroup>
											<InputGroup.Addon inline id="eventNameAria">
												Event Name
											</InputGroup.Addon>
											<FormControl
												type="text"
												id="name"
												placeholder="Event Name"
												value={name}
												onChange={this.onChange}
											/>

											<InputGroup.Addon inline id="privateEventAria">
												<Checkbox
													name="privateEvent"
													id="privateEvent"
													value="true"
													checked={!!privateEvent}
													onChange={() =>
														this.setState({
															privateEvent: !this.state.privateEvent
														})
													}
												/>
											</InputGroup.Addon>
										</InputGroup>
									</ControlLabel>
									<br />

									<div className="form-inline">
										<FormGroup className="pull-left">
											<ControlLabel htmlFor="date">
												Date
												<FormControl
													type="date"
													name="date"
													id="date"
													placeholder="Date"
													value={date}
													componentClass="datepicker"
													data-bvalidator="required,date[yyyy-mm-dd]"
													data-bvalidator-msg="Event requires date/time."
													onChange={this.onChange}
												/>
											</ControlLabel>
										</FormGroup>
										<FormGroup className="pull-right">
											<ControlLabel htmlFor="Time">
												Time
												<FormControl
													componentClass="select"
													name="hour"
													id="hour"
													value={hour}
													data-bvalidator="required"
													data-bvalidator-msg="Event requires date/time."
													onChange={this.onChange}
												>
													<option value="">Hour</option>
													{[...Array(24).keys()].map((i, key) => (
														<option value={i} key={key}>
															{i}
														</option>
													))}
												</FormControl>
												<FormControl
													componentClass="select"
													name="minute"
													id="minute"
													value={minute}
													data-bvalidator="required"
													data-bvalidator-msg="Event requires date/time."
													onChange={this.onChange}
												>
													<option value="">Minute</option>
													{[0, 15, 30, 45].map((i, key) => (
														<option
															value={`${i}`.padStart(2, '0')}
															key={key}
														>
															{`${i}`.padStart(2, '0')}
														</option>
													))}
												</FormControl>
											</ControlLabel>
										</FormGroup>
									</div>
									<br />
									<ControlLabel htmlFor="location">
										Location
										<FormControl
											type="text"
											name="location"
											id="location"
											placeholder="Location"
											value={location}
											data-bvalidator="required"
											data-bvalidator-msg="Event requires location."
											onChange={this.onChange}
										/>
									</ControlLabel>
									<br />
									<ControlLabel htmlFor="facebook">
										Facebook Event URL
										<FormControl
											type="url"
											name="facebook"
											id="facebook"
											placeholder="Facebook Event URL"
											value={facebook}
											data-bvalidator="url"
											onChange={this.onChange}
										/>
									</ControlLabel>
									<br />
									<Button type="submit" bsStyle="primary" onClick={this.onSubmit}>
										{`${type === 'edit' ? 'Update' : 'Create'} Event`}
									</Button>
								</Panel.Body>
							</form>
						</Panel>
						<hr />
					</div>
					{canEdit && (
						<Button
							type="button"
							bsStyle="danger"
							bsSize="small"
							onClick={this.onDeleteEvent}
						>
							Delete Event
						</Button>
					)}
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
)(EditEventPage);
