import { Component } from 'react';
import { connect } from 'react-redux';
import { sendErrorMessage, sendSuccessMessage } from '../../redux/actions';
import { redirect } from '../../utils/session';
import { Context } from '../../@types';

interface DispatchToProps {
	flashError: (msg: string, ctx?: Context) => void;
	flashSuccess: (msg: string, ctx?: Context) => void;
}

interface Props extends DispatchToProps {
	to: string;
	green?: string;
	red?: string;
}

class Redirect extends Component<Props> {
	componentDidMount() {
		const { to, flashSuccess, flashError, green, red } = this.props;
		redirect(to);
		if (red) flashError(red);
		else if (green) flashSuccess(green);
	}

	render() {
		return null;
	}
}

export default connect<{}, DispatchToProps>(
	null,
	{ flashError: sendErrorMessage, flashSuccess: sendSuccessMessage }
)(Redirect);
