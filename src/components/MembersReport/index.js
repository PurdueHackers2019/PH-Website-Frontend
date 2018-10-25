import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../Common';
import {
	fetchMembersReport,
	getGradeData,
	getGradeOptions,
	getMajorData,
	getMajorOptions,
	getMembersEventAttendanceData,
	getMembersEventAttendanceOptions
} from '../../actions';

import { Bar, Line } from 'react-chartjs-2';

class ReportsPage extends Component {
	static propTypes = {
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			majorData: {},
			classData: {},
			membersEventAttendanceData: {},
			numNewMembersPerMonthData: {},
			numMembersPerMonthData: {},
			eventAttendancePerMonthData: {}
		};
	}

	componentDidMount = async () => {

		// TODO: Add try catch
		const {
			majors: majorData,
			grades: classData,
			membersEventAttendance: membersEventAttendanceData,
			numNewMembersPerMonth: numNewMembersPerMonthData,
			numMembersPerMonth: numMembersPerMonthData,
			eventAttendancePerMonth: eventAttendancePerMonthData
		} = await fetchMembersReport();

		this.setState({
			classData,
			majorData,
			membersEventAttendanceData,
			numNewMembersPerMonthData,
			numMembersPerMonthData,
			eventAttendancePerMonthData
		});
	};


	// TODO: Move these to constants
	getNumNewMembersPerMonthData = () => {
		const data = {
			labels: Object.keys(this.state.numNewMembersPerMonthData),
			datasets: [
				{
					label: '# New Members Per Month',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(155, 232, 184, 0.4)',
					borderColor: 'rgba(155, 232, 184, 1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(155, 232, 184, 1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(155, 232, 184, 1)',
					pointHoverBorderColor: 'rgba(155, 232, 1840, 1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: Object.values(this.state.numNewMembersPerMonthData)
				}
			]
		};

		return data;
	};

	getNumMembersPerMonthData = () => {
		const data = {
			labels: Object.keys(this.state.numMembersPerMonthData),
			datasets: [
				{
					label: '# Members',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(238, 218, 105, 0.4)',
					borderColor: 'rgba(238, 218, 105, 1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(238, 218, 105, 1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(238, 218, 105, 1)',
					pointHoverBorderColor: 'rgba((238, 218, 105, 1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: Object.values(this.state.numMembersPerMonthData)
				}
			]
		};

		return data;
	};

	getEventAttendance = () => {
		const data = {
			labels: Object.keys(this.state.eventAttendancePerMonthData),
			datasets: [
				{
					label: 'Total Event Attendance Per Month',
					fill: false,
					lineTension: 0.12,
					backgroundColor: 'rgba(255, 99, 132, 0.4)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(255, 99, 132, 1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
					pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: Object.values(this.state.eventAttendancePerMonthData)
				}
			]
		};

		return data;
	};

	render() {
		// TODO: Make vars that hold the result of the functions
		return (
			<div>
				<div className="section">
					<div className="section-container">
						<Header message="Members Report" />
						<h3>Members Report</h3>
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Bar
							data={getGradeData(this.state.classData)}
							options={getGradeOptions().options}
						/>
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Bar
							data={getMajorData(this.state.majorData)}
							options={getMajorOptions().options}
						/>
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Line data={this.getNumNewMembersPerMonthData()} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Line data={this.getNumMembersPerMonthData()} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Bar
							data={getMembersEventAttendanceData(this.state.membersEventAttendanceData)}
							options={getMembersEventAttendanceOptions().options}
						/>
					</div>
				</div>
				<div className="section">
					<div className="section-container">
						<Line data={this.getEventAttendance()} />
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
	{}
)(ReportsPage);
