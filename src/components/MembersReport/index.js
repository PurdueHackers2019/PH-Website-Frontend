import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Header } from '../Common';
import { sendFlashMessage, clearFlashMessages, fetchMembersReport } from '../../actions';
import {
	getGradeGraphData,
	getGradeGraphOptions,
	getMajorGraphData,
	getMajorGraphOptions,
	getNumNewMembersPerMonthGraphData,
	getNumMembersPerMonthGraphData,
	getMembersEventAttendanceGraphData,
	getEventAttendanceGraphData,
	getMembersEventAttendanceGraphOptions
} from '../../constants/reports';

import { err } from '../../constants';

import { Bar, Line } from 'react-chartjs-2';

class ReportsPage extends Component {
	static propTypes = {
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired,
		flash: PropTypes.func.isRequired,
		clear: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			majorData: {},
			gradeData: {},
			membersEventAttendanceData: {},
			numNewMembersPerMonthData: {},
			numMembersPerMonthData: {},
			eventAttendanceData: {},
			loading: true
		};
	}

	componentDidMount = async () => {
		const { flash, clear } = this.props;
		try {
			clear();
			const {
				majors: majorData,
				grades: gradeData,
				membersEventAttendance: membersEventAttendanceData,
				numNewMembersPerMonth: numNewMembersPerMonthData,
				numMembersPerMonth: numMembersPerMonthData,
				eventAttendancePerMonth: eventAttendanceData
			} = await fetchMembersReport();

			this.setState({
				gradeData,
				majorData,
				membersEventAttendanceData,
				numNewMembersPerMonthData,
				numMembersPerMonthData,
				eventAttendanceData,
				loading: false
			});
		} catch (error) {
			this.setState({ loading: false });
			flash(err(error));
		}
	};

	render() {
		// TODO: Make vars that hold the result of the functions
		const {
			gradeData,
			majorData,
			membersEventAttendanceData,
			numNewMembersPerMonthData,
			numMembersPerMonthData,
			eventAttendanceData,
			loading
		} = this.state;

		if (loading) return <span>Loading...</span>;

		const gradeGraphData = getGradeGraphData(gradeData);
		const gradeGraphOptions = getGradeGraphOptions().options;

		const majorGraphData = getMajorGraphData(majorData);
		const majorGraphOptions = getMajorGraphOptions().options;

		const numNewMembersPerMonthGraphData = getNumNewMembersPerMonthGraphData(
			numNewMembersPerMonthData
		);

		const numMembersPerMonthGraphData = getNumMembersPerMonthGraphData(numMembersPerMonthData);
		const membersEventAttendanceGraphData = getMembersEventAttendanceGraphData(
			membersEventAttendanceData
		);
		const membersEventAttendanceGraphOptions = getMembersEventAttendanceGraphOptions().options;

		const eventAttendanceGraphData = getEventAttendanceGraphData(eventAttendanceData);

		return (
			<div>
				<div className="section">
					<div className="section-container">
						{/* <Header message="Members Report" /> */}
						<h3>Members Report</h3>
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Bar data={gradeGraphData} options={gradeGraphOptions} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Bar data={majorGraphData} options={majorGraphOptions} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Line data={numNewMembersPerMonthGraphData} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Line data={numMembersPerMonthGraphData} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Bar
							data={membersEventAttendanceGraphData}
							options={membersEventAttendanceGraphOptions}
						/>
					</div>
				</div>
				<div className="section">
					<div className="section-container">
						<Line data={eventAttendanceGraphData} />
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
