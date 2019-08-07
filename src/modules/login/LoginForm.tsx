import React from 'react';
import Link from 'next/link';
import { LoginRequest } from '../../@types';

interface Props extends LoginRequest {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginForm = ({
	email,
	password,
	rememberMe,
	onSubmit,
	onChange,
	onChecked
}: Props) => {
	return (
		<form className="panel-body" onSubmit={onSubmit}>
			<br />
			<div className="form-group row">
				<div className="col-sm-3 col-sm-offset-2 text-right">Email:</div>
				<div className="col-sm-4">
					<input
						required
						type="email"
						name="email"
						className="form-control"
						placeholder="Email"
						value={email}
						onChange={onChange}
					/>
				</div>
			</div>
			<div className="form-group row">
				<div className="col-sm-3 col-sm-offset-2 text-right">Password:</div>
				<div className="col-sm-4">
					<input
						required
						type="password"
						name="password"
						className="form-control"
						placeholder="Password"
						value={password}
						onChange={onChange}
					/>
				</div>
			</div>
			<div className="form-group row">
				<div className="col-sm-offset-5 col-sm-10">
					<div className="checkbox">
						<label htmlFor="remember">
							<input
								type="checkbox"
								name="rememberMe"
								checked={rememberMe}
								onChange={onChecked}
							/>
							Remember me
						</label>
					</div>
				</div>
			</div>
			<input type="submit" className="btn btn-primary" value="Sign In" />
			<br />
			<br />
			Forgot your password?{' '}
			<Link href="/forgot">
				<a>Click Here</a>
			</Link>
		</form>
	);
};
