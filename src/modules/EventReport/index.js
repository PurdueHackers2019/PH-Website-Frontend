import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { sendFlashMessage, clearFlashMessages, fetchEventReport } from '../../actions';

import {
	getGradeGraphData,
	getGradeGraphOptions,
	getMajorGraphData,
	getMajorGraphOptions,
	getMembersEventAttendanceGraphData,
	getMembersCurrentEventAttendanceGraphData,
	getMembersEventAttendanceGraphOptions
} from '../../constants/reports';

import { err } from '../../constants';
import { CustomRedirect } from '../common';
import { Bar } from 'react-chartjs-2';

class ReportsPage extends Component {
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string
			})
		}).isRequired,
		flash: PropTypes.func.isRequired,
		clear: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			eventName: '',
			gradeData: {},
			majorData: {},
			membersEventAttendancePriorToTheEventData: {},
			membersCurrentEventAttendanceData: {},
			loading: true
		};
		console.log('Event report page props', this.props);
	}

	componentDidMount = async () => {
		const {
			match: {
				params: { id }
			},
			flash,
			clear
		} = this.props;
		try {
			clear();
			const {
				eventName,
				majors: majorData,
				grades: gradeData,
				membersEventAttendancePriorToTheEvent: membersEventAttendancePriorToTheEventData,
				membersCurrentEventAttendance: membersCurrentEventAttendanceData
			} = await fetchEventReport(id);

			this.setState({
				eventName,
				gradeData,
				majorData,
				membersEventAttendancePriorToTheEventData,
				membersCurrentEventAttendanceData,
				loading: false
			});
		} catch (error) {
			this.setState({ loading: false });
			flash(err(error));
		}
	};

	render() {
		const { match } = this.props;
		const {
			eventName,
			gradeData,
			majorData,
			membersEventAttendancePriorToTheEventData,
			membersCurrentEventAttendanceData,
			loading
		} = this.state;

		if (loading) return <span>Loading...</span>;
		if (!loading && !eventName) return <CustomRedirect msgRed="Event not found" />;

		const gradeGraphData = getGradeGraphData(gradeData);
		const gradeGraphOptions = getGradeGraphOptions().options;

		const majorGraphData = getMajorGraphData(majorData);
		const majorGraphOptions = getMajorGraphOptions().options;

		const membersEventAttendancePriorToTheEventGraphData = getMembersEventAttendanceGraphData(
			membersEventAttendancePriorToTheEventData,
			'Attendees Event Attendance Prior to the Event'
		);

		const membersCurrentEventAttendanceGraphData = getMembersCurrentEventAttendanceGraphData(
			membersCurrentEventAttendanceData
		);

		const membersEventAttendanceGraphOptions = getMembersEventAttendanceGraphOptions().options;
		return (
			<div>
				<div className="section">
					<div className="section-container">
						{/* <Header message={`Report for ${eventName}`} /> */}
						<h3>
							<Link key={`${match.params.id}-1`} to={`/event/${match.params.id}`}>
								<button type="button" className="pull-left btn btn-primary btn-sm">
									<span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
									Event
								</button>
							</Link>
							{eventName} Report
						</h3>
					</div>
				</div>
				<div className="section">
					<div className="section-container" style={{ paddingBottom: '30px' }}>
						<Bar data={gradeGraphData} options={gradeGraphOptions} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Bar data={majorGraphData} options={majorGraphOptions} />
					</div>
				</div>
				<div className="section">
					<div className="section-container">
						<Bar
							data={membersEventAttendancePriorToTheEventGraphData}
							options={membersEventAttendanceGraphOptions}
						/>
					</div>
				</div>
				<div className="section">
					<div className="section-container">
						<Bar
							data={membersCurrentEventAttendanceGraphData}
							options={membersEventAttendanceGraphOptions}
						/>
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
	{
		flash: sendFlashMessage,
		clear: clearFlashMessages
	}
)(ReportsPage);
