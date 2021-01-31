// TODO: Move these to constants
export const getNumNewMembersPerMonthGraphData = numNewMembersPerMonthData => {
	const data = {
		labels: Object.keys(numNewMembersPerMonthData),
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
				data: Object.values(numNewMembersPerMonthData)
			}
		]
	};

	return data;
};

export const getNumMembersPerMonthGraphData = numMembersPerMonthData => {
	const data = {
		labels: Object.keys(numMembersPerMonthData),
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
				data: Object.values(numMembersPerMonthData)
			}
		]
	};

	return data;
};

export const getEventAttendanceGraphData = eventAttendanceData => {
	const data = {
		labels: Object.keys(eventAttendanceData),
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
				data: Object.values(eventAttendanceData)
			}
		]
	};

	return data;
};

// Getting Graph Data Functions
export const getGradeGraphData = gradeData => {
	const data = {
		labels: Object.keys(gradeData),
		datasets: [
			{
				label: 'Class Distribution',
				backgroundColor: 'rgba(255,99,132,0.2)',
				borderColor: 'rgba(255,99,132,1)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				hoverBorderColor: 'rgba(255,99,132,1)',
				data: Object.values(gradeData)
			}
		]
	};
	return data;
};

export const getMajorGraphData = majorData => {
	const data = {
		labels: Object.keys(majorData),
		datasets: [
			{
				label: 'Major Distribution',
				backgroundColor: 'rgba(0, 102, 255, 0.2)',
				borderColor: 'rgba(0, 82, 204, 1)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(0, 102, 255, 0.4)',
				hoverBorderColor: 'rgba(0, 82, 204, 1)',
				data: Object.values(majorData)
			}
		]
	};
	return data;
};

export const getMembersEventAttendanceGraphData = (membersEventAttendanceData, label) => {
	const data = {
		labels: Object.keys(membersEventAttendanceData),
		datasets: [
			{
				label,
				backgroundColor: 'rgba(179, 102, 255, 0.2)',
				borderColor: 'rgba(140, 26, 255, 1)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(179, 102, 255, 0.4)',
				hoverBorderColor: 'rgba(140, 26, 255, 1)',
				data: Object.values(membersEventAttendanceData)
			}
		]
	};
	return data;
};

export const getMembersCurrentEventAttendanceGraphData = membersCurrentEventAttendanceData => {
	const data = {
		labels: Object.keys(membersCurrentEventAttendanceData),
		datasets: [
			{
				label: 'Attendees Current Event Attendance',
				backgroundColor: 'rgba(89, 217, 138, 0.2)',
				borderColor: 'rgba(89, 217, 138, 1)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(89, 217, 138, 0.2)',
				hoverBorderColor: 'rgba(89, 217, 138, 1)',
				data: Object.values(membersCurrentEventAttendanceData)
			}
		]
	};
	return data;
};

// Getting graph option(s) functions
export const getGradeGraphOptions = () => ({
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						callback: value => {
							if (Number.isInteger(value)) {
								return value;
							}
							return null;
						}
					}
				}
			]
		}
	}
});

export const getMajorGraphOptions = () => ({
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						callback: value => {
							if (Number.isInteger(value)) {
								return value;
							}
							return null;
						}
					}
				}
			]
		}
	}
});
export const getMembersEventAttendanceGraphOptions = () => ({
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						callback: value => {
							if (Number.isInteger(value)) {
								return value;
							}
							return null;
						}
					}
				}
			]
		}
	}
});
