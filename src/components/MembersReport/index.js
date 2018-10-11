import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../Common';
import {
	fetchMembersReport,
	getClassData,
	getClassOptions,
	getMajorData,
	getMajorOptions,
	getMembersEventAttendance,
	getMembersEventAttendanceOptions
} from '../../actions';

import { Bar, Line } from 'react-chartjs-2';

class ReportsPage extends Component {
	static propTypes = {
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired,
		user: PropTypes.object
	};

	static defaultProps = { user: null };

	constructor(props) {
		super(props);
		this.state = {
			classData: {},
			cumulativeDateJoinedData: {},
			eventAttendancePerMonthData: {},
			majorData: {},
			membersEventAttendanceData: {},
			numPeoplePerDateJoinedData: {},
			eventAttendancePerMonthData: {},
			loading: true
		};
	}

	componentDidMount = async () => {
		const { classData, cumulativeDateJoinedData,
			majorData, membersEventAttendanceData, numPeoplePerDateJoinedData, eventAttendancePerMonthData } = await fetchMembersReport();

		console.log('ReportsPage fetched classData', classData);
		console.log('ReportsPage fetched cumulativeDateJoinedData', cumulativeDateJoinedData);
		console.log('ReportsPage fetched majorData', majorData);
		console.log('ReportsPage fetched membersEventAttendanceData', membersEventAttendanceData);
		console.log('ReportsPage fetched numPeoplePerDateJoinedData', numPeoplePerDateJoinedData);
		this.setState({ classData, cumulativeDateJoinedData, majorData, membersEventAttendanceData, numPeoplePerDateJoinedData, eventAttendancePerMonthData, loading: false });
	};

	getSpecificDateJoinedData = () => {
		const data = {
			labels: Object.keys(this.state.numPeoplePerDateJoinedData),
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
					data: Object.values(this.state.numPeoplePerDateJoinedData)
				}
			]
		};

		return data;
	};

	getCumulativeDateJoinedData = () => {
		const data = {
			labels: Object.keys(this.state.cumulativeDateJoinedData),
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
					data: Object.values(this.state.cumulativeDateJoinedData)
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
		return (
			<div>
				<div className="section">
					<div className="section-container">
						<Header message="Members Report" />
						<h3>Members Report</h3>
					</div>
				</div>
				<div
					className="section"
					style={{ textAlign: 'left' }}
					style={{ paddingBottom: '30px' }}
				>
					<div className="section-container">
						<Bar data={getClassData(this.state.classData)} options={getClassOptions()} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Bar data={getMajorData(this.state.majorData)} options={getMajorOptions()} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Line data={this.getSpecificDateJoinedData()} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Line data={this.getCumulativeDateJoinedData()} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Bar
							data={getMembersEventAttendance(this.state.membersEventAttendanceData)}
							options={getMembersEventAttendanceOptions()}
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
