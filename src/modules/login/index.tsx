import React, { FormEvent, ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import {
	signIn,
	sendErrorMessage,
	sendSuccessMessage,
	clearFlashMessages
} from '../../redux/actions';
import { LoginForm } from './LoginForm';
import { LoginRequest, LoginResponse, Context } from '../../@types';
import { err } from '../../utils';

interface Props {
	signin: (body: LoginRequest) => Promise<LoginResponse>;
	flashError: (msg: string, ctx?: Context) => void;
	flashSuccess: (msg: string, ctx?: Context) => void;
	clear: (ctx?: Context) => void;
}

const Login = ({ signin, flashError, flashSuccess, clear }: Props) => {
	const [state, setState] = useState<LoginRequest>({
		email: '',
		password: '',
		rememberMe: false
	});

	const onChange = (e: ChangeEvent<HTMLInputElement>) =>
		setState({ ...state, [e.target.name]: e.target.value });

	const onChecked = _ => setState(prev => ({ ...prev, rememberMe: !prev.rememberMe }));

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			clear();
			flashSuccess('Signing in...');
			const { user } = await signin(state);
			Router.push('/');
			clear();
			flashSuccess(`Welcome ${user.name}!`);
		} catch (error) {
			clear();
			flashError(err(error));
		}
	};

	return (
		<div>
			<div className="section">
				<div className="section-container">
					<h3>Login</h3>

					<div className="panel panel-default">
						<LoginForm
							onSubmit={onSubmit}
							onChange={onChange}
							onChecked={onChecked}
							{...state}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export const LoginPage = connect(
	null,
	{
		signin: signIn,
		flashError: sendErrorMessage,
		flashSuccess: sendSuccessMessage,
		clear: clearFlashMessages
	}
)(Login);
