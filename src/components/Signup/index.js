import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isMobilePhone } from 'validator';
import { err } from '../../constants';
import { sendFlashMessage, clearFlashMessages, signUp } from '../../actions';
import { Header } from '../Common';
import { Panel, Button, FormControl, InputGroup, ControlLabel } from 'react-bootstrap';

class SignUpPage extends Component {
	static propTypes = {
		history: PropTypes.shape({
			push: PropTypes.func
		}).isRequired,
		signUp: PropTypes.func.isRequired,
		flash: PropTypes.func.isRequired,
		clear: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			passwordConfirm: '',
			graduationYear: new Date().getFullYear() + 4,
			privateProfile: false,
			unsubscribed: false,
			picture: '',
			pictureFile: null,
			gender: 'Male',
			phone: '',
			major: 'Computer Science',
			description: '',
			facebook: '',
			github: '',
			linkedin: '',
			devpost: '',
			website: '',
			resume: null,
			resumeLink: '',
			resumeType: 'Link'
		};
		console.log('Signup page props', this.props);
	}

	onChange = e => {
		const { id, value, files } = e.target;
		id === 'pictureFile' || id === 'resume'
			? this.setState({ [id]: files[0] })
			: this.setState({ [id]: value });
	};

	onCheckboxChange = e => this.setState({ [e.target.id]: !this.state[e.target.id] });

	onSubmit = async e => {
		e.preventDefault();
		const {
			name,
			email,
			password,
			passwordConfirm,
			graduationYear,
			phone,
			facebook,
			github,
			linkedin,
			devpost,
			pictureFile,
			resume
		} = this.state;
		const { flash, clear, signUp, history } = this.props;
		try {
			clear();
			console.log('Submitting:', this.state);
			console.log('Facebook matches:', /(facebook|fb)/.test(facebook));
			console.log('Github matches:', /github/.test(github));
			console.log('Linkedin matches:', /linkedin/.test(linkedin));
			console.log('Devpost matches:', /devpost/.test(devpost));
			if (!name) return flash('Please enter your full name');
			if (!email) return flash('An email is required for your account');
			if (!graduationYear) return flash('A graduation year is required');
			if (!password) return flash('A password is required');
			if (!passwordConfirm) return flash('Please confirm your password');
			if (password !== passwordConfirm) return flash('Passwords does not match');
			if (phone && !isMobilePhone(phone, ['en-US']))
				return flash('Please provide a valid U.S. phone number');
			if (facebook && !/(facebook|fb)/.test(facebook)) return flash('Invalid Facebook URL');
			if (github && !/github/.test(github)) return flash('Invalid GitHub URL');
			if (linkedin && !/linkedin/.test(linkedin)) return flash('Invalid LinkedIn URL');
			if (devpost && !/devpost/.test(devpost)) return flash('Invalid Devpost URL');
			const formData = new FormData();
			Object.keys(this.state).forEach(key => {
				if (key !== 'pictureFile' && key !== 'resume')
					formData.append(key, this.state[key]);
			});
			if (pictureFile) formData.append('picture', pictureFile, pictureFile.name);
			if (resume) formData.append('resume', resume, resume.name);
			flash('Creating your account...', 'green');
			const resp = await signUp(formData);
			history.push('/');
			return flash(`Welcome ${resp.user.name}!`, 'green');
		} catch (error) {
			console.error('EditProfile Page error:', error);
			return flash(err(error));
		}
	};

	render() {
		const {
			name,
			email,
			password,
			passwordConfirm,
			graduationYear,
			privateProfile,
			picture,
			pictureFile,
			unsubscribed,
			phone,
			major,
			facebook,
			gender,
			github,
			linkedin,
			website,
			description,
			devpost,
			resume,
			resumeLink,
			resumeType
		} = this.state;
		return (
			<div className="section">
				<div className="section-container">
					<Header message="Signup" />
					<h3>Join Purdue Hackers</h3>
					<Panel>
						<form className="validate" onSubmit={this.onSubmit}>
							<Panel.Body>
								<p className="text-muted text-center">
									Fields marked with an * are required
								</p>
								<ControlLabel htmlFor="name">
									Full Name *
									<div className="text-right pull-right">
										<span style={{ fontSize: '8px' }}>
											(Restrict your profile to only members)
										</span>
										Private Profile
									</div>
								</ControlLabel>
								<InputGroup>
									<FormControl
										type="text"
										name="name"
										id="name"
										placeholder="Full Name"
										value={name}
										onChange={this.onChange}
										pattern="([a-zA-Z]+ )+[a-zA-Z]+"
										title="Please enter first and last name"
										required
									/>
									<InputGroup.Addon inline id="privateProfileGroup">
										<input
											inline
											type="checkbox"
											name="privateProfile"
											id="privateProfile"
											checked={privateProfile}
											onChange={this.onCheckboxChange}
										/>
									</InputGroup.Addon>
								</InputGroup>
								<br />
								<ControlLabel htmlFor="email">
									Account Email *
									<div className="text-right pull-right">
										<span style={{ fontSize: '8px' }}>
											(Stop receiving auto-generated emails)
										</span>
										Unsubscribe
									</div>
								</ControlLabel>
								<InputGroup>
									<FormControl
										type="email"
										name="email"
										id="email"
										placeholder="Email"
										value={email}
										onChange={this.onChange}
										required
									/>
									<InputGroup.Addon inline id="unsubscribedGroup">
										<input
											inline
											type="checkbox"
											name="unsubscribed"
											id="unsubscribed"
											checked={unsubscribed}
											onChange={this.onCheckboxChange}
										/>
									</InputGroup.Addon>
								</InputGroup>
								<br />
								<ControlLabel htmlFor="graduationYear">
									Year of Graduation *
									<FormControl
										type="number"
										id="graduationYear"
										min="1869"
										max={new Date().getFullYear() + 20}
										placeholder="Graduation Year"
										value={graduationYear}
										onChange={this.onChange}
										required
									/>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="password">
									Password *
									<FormControl
										type="password"
										name="password"
										id="password"
										placeholder="Password"
										value={password}
										onChange={this.onChange}
										data-bvalidator="required"
										data-bvalidator-msg="A password is required"
									/>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="passwordConfirm">
									Confirm Password *
									<FormControl
										type="password"
										name="passwordConfirm"
										id="passwordConfirm"
										value={passwordConfirm}
										onChange={this.onChange}
										placeholder="Confirm Password"
										data-bvalidator="required,equalto[password]"
										data-bvalidator-msg="Password does not match"
									/>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="picture">
									Profile Picture (JPG or PNG)
									<br />
									{pictureFile ? (
										<img
											alt="Profile"
											src={URL.createObjectURL(pictureFile)}
											style={{ maxWidth: '100%' }}
										/>
									) : picture ? (
										<img
											alt="Profile"
											src={picture}
											style={{ maxWidth: '100%' }}
										/>
									) : null}
									<FormControl
										type="file"
										id="pictureFile"
										accept="image/*"
										onChange={this.onChange}
									/>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="phone">
									Cell Phone Number (private, only for text notifications)
									<FormControl
										type="tel"
										name="phone"
										id="phone"
										placeholder="123-456-7890"
										title="10 Digit Cell Phone Number"
										value={phone}
										onChange={this.onChange}
										data-bvalidator="minlength[10]"
										data-bvalidator-msg="Please enter a valid cell phone # (with area code)"
									/>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="description">
									Public Message
									<FormControl
										name="description"
										id="description"
										value={description}
										onChange={this.onChange}
										componentClass="textarea"
										placeholder="Public Message"
									/>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="major">
									Major
									<FormControl
										name="major"
										id="major"
										componentClass="select"
										data-bvalidator="required"
										value={major}
										onChange={this.onChange}
									>
										<option value="Computer Science">Computer Science</option>
										<option value="Computer Graphics Technology">
											Computer Graphics Technology
										</option>
										<option value="Computer Information Technology">
											Computer Information Technology
										</option>
										<option value="Electrical Computer Engineering">
											Electrical Computer Engineering
										</option>
										<option value="Electrical Engineering">
											Electrical Engineering
										</option>
										<option value="First Year Engineering">
											First Year Engineering
										</option>
										<option value="Math">Math</option>
										<option value="Mechanical Engineering">
											Mechanical Engineering
										</option>
										<option value="Other">Other</option>
									</FormControl>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="gender">
									Gender
									<FormControl
										name="gender"
										id="gender"
										value={gender}
										onChange={this.onChange}
										componentClass="select"
										data-bvalidator="required"
									>
										<option value="Male">Male</option>
										<option value="Female">Female</option>
										<option value="Other">Other</option>
										<option value="No">Prefer Not To Answer</option>
									</FormControl>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="facebook">
									Facebook Profile
									<FormControl
										type="url"
										name="facebook"
										id="facebook"
										placeholder="Facebook Profile"
										value={facebook}
										onChange={this.onChange}
										data-bvalidator="url"
										data-bvalidator-msg="Please enter a valid URL to your Facebook Profile."
									/>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="github">
									Github Profile
									<FormControl
										type="url"
										name="github"
										id="github"
										placeholder="Github Profile"
										value={github}
										onChange={this.onChange}
										data-bvalidator="url"
										data-bvalidator-msg="Please enter a valid URL to your Github Profile."
									/>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="linkedin">
									LinkedIn Profile
									<FormControl
										type="url"
										name="linkedin"
										id="linkedin"
										placeholder="LinkedIn Profile"
										value={linkedin}
										onChange={this.onChange}
										data-bvalidator="url"
										data-bvalidator-msg="Please enter a valid URL to your LinkedIn Profile."
									/>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="devpost">
									Devpost Profile
									<FormControl
										type="url"
										name="devpost"
										id="devpost"
										placeholder="Devpost Profile"
										value={devpost}
										onChange={this.onChange}
										data-bvalidator="url"
										data-bvalidator-msg="Please enter a valid URL to your Devpost Profile."
									/>
								</ControlLabel>
								<br />
								<ControlLabel htmlFor="website">
									Personal Website
									<FormControl
										type="url"
										name="website"
										id="website"
										placeholder="Personal Website"
										value={website}
										onChange={this.onChange}
										data-bvalidator="url"
										data-bvalidator-msg="Please enter a valid URL to your Personal Website."
									/>
								</ControlLabel>
								<br />
								<u>
									<p className="form-check-label">Resume (PDF)</p>
								</u>
								<ControlLabel
									className="form-check-label form-check-inline"
									htmlFor="linkToResume"
								>
									<input
										type="radio"
										name="linkToResume"
										id="linkToResume"
										className="form-check-input"
										checked={resumeType === 'Link'}
										onChange={() => this.setState({ resumeType: 'Link' })}
									/>
									&nbsp; Link (Preferred)
								</ControlLabel>
								<ControlLabel
									className="form-check-label form-check-inline"
									htmlFor="resumeFile"
								>
									<input
										type="radio"
										name="resumeFile"
										id="resumeFile"
										value="File"
										className="form-check-input"
										checked={resumeType === 'File'}
										onChange={() => this.setState({ resumeType: 'File' })}
									/>
									&nbsp; Upload File
								</ControlLabel>
								{resumeType === 'Link' ? (
									<FormControl
										type="url"
										id="resumeLink"
										placeholder="Link to Resume"
										value={resumeLink}
										onChange={this.onChange}
										data-bvalidator="url"
										data-bvalidator-msg="Please enter a valid URL to your Resume."
									/>
								) : (
									<div>
										{resume && (
											<a
												href={
													typeof resume.webkitRelativePath !== 'undefined'
														? resume.webkitRelativePath
														: resume
												}
												target="_blank"
												className="form-control"
											>
												{resume.name || `${name}'s Resume`}
											</a>
										)}
										<FormControl
											type="file"
											id="resume"
											accept="application/pdf"
											className="pull-left"
											onChange={this.onChange}
										/>
									</div>
								)}
								<br />
								<br />
								<Button type="submit" bsStyle="primary">
									Join
								</Button>
							</Panel.Body>
						</form>
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
	{
		flash: sendFlashMessage,
		clear: clearFlashMessages,
		signUp
	}
)(SignUpPage);
