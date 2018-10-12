import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	sendFlashMessage,
	clearFlashMessages,
	getClassData,
	getClassOptions,
	getMajorData,
	getMajorOptions,
	getMembersEventAttendance,
	getMembersEventAttendanceOptions,
	fetchEventReport
} from '../../actions';
import { err } from '../../constants';
import { CustomRedirect, Header } from '../Common';
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
			classData: {},
			majorData: {},
			membersEventAttendanceData: {},
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
				classData,
				majorData,
				membersEventAttendanceData
			} = await fetchEventReport(id);

			this.setState({
				eventName,
				classData,
				majorData,
				membersEventAttendanceData,
				loading: false
			});
		} catch (error) {
			this.setState({ loading: false });
			flash(err(error));
		}
	};

	render() {
		const { match } = this.props;
		const { eventName, classData, majorData, membersEventAttendanceData, loading } = this.state;

		if (loading) return <span>Loading...</span>;
		if (!loading && !eventName) return <CustomRedirect msgRed="Event not found" />;

		return (
			<div>
				<div className="section">
					<div className="section-container">
						<Header message={eventName} />
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
						<Header message="Class Data" />
						<Bar data={getClassData(classData)} options={getClassOptions().options} />
					</div>
				</div>
				<div className="section" style={{ paddingBottom: '30px' }}>
					<div className="section-container">
						<Header message="Major Data" />
						<Bar data={getMajorData(majorData)} options={getMajorOptions().options} />
					</div>
				</div>
				<div className="section">
					<div className="section-container">
						<Header message="Member Event Attendance" />
						<Bar
							data={getMembersEventAttendance(membersEventAttendanceData)}
							options={getMembersEventAttendanceOptions().options}
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
