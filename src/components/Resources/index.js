import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendFlashMessage, clearFlashMessages } from '../../actions';

class Resources extends Component {
	static propTypes = {
		flash: PropTypes.func.isRequired,
		clear: PropTypes.func.isRequired
	};

	componentDidMount = async () => {
		const { flash, clear } = this.props;
		try {
			clear();
		} catch (error) {
			flash('Whoops! Something went wrong!');
		}
	};

	render = () => (
		<div>
			<div className="section">
				<div className="section-container">
					<h3>Resources</h3>
				</div>

				<a
					href="https://purdue-web-dev-club-3.gitbook.io/react/"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Tutorial: Create a To-do App
				</a>
				<br />
				<a
					href="https://docs.google.com/presentation/d/16YMRKqm6WnaVw_EZO7polZICpguOgWr3XGYIxE63A28/edit"
					target="_blank"
					rel="noopener noreferrer"
				>
					Git Tutorial
				</a>
				<br />
				<a
					href="https://maneesht.gitbooks.io/web-development-basics/content/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Web Development Basic Workshop
				</a>
				<br />
				<a
					href="https://github.com/PurdueHackers/Neural-Network-Purdue-Workshop"
					target="_blank"
					rel="noopener noreferrer"
				>
					Neural Networks Workshop
				</a>
				<br />
				<a
					href="https://maneesht.gitbooks.io/hello-spotify/content/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Spotify Clone Workshop
				</a>
				<br />
				<a
					href="https://jwlehman93.gitbooks.io/hello-world-server/content/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Create a Server Tutorial
				</a>
				<br />
				<a
					href="https://vidia.gitbooks.io/hello-android/content/building/adding_text_input.html"
					target="_blank"
					rel="noopener noreferrer"
				>
					Android Tutorial
				</a>
				<br />
				<a
					href="https://purduehackers.gitbook.io/tutorials/workshops/nodejs-workshop"
					target="_blank"
					rel="noopener noreferrer"
				>
					NodeJS Workshop
				</a>
				<br />
				<a
					href="https://purduehackers.gitbook.io/tutorials/workshops/react-workshop"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Workshop
				</a>
				<br />
				<a
					href="https://drive.google.com/file/d/1UTCDNm-4R1K2qZaomQDe_QcQXjvRXjVf/view"
					target="_blank"
					rel="noopener noreferrer"
				>
					Firebase Workshop
				</a>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	...state.sessionState
});

export default connect(
	mapStateToProps,
	{ flash: sendFlashMessage, clear: clearFlashMessages }
)(Resources);
