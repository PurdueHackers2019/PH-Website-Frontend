import ReactGA from 'react-ga';
import { Dispatch } from 'redux';
import { decode } from 'jsonwebtoken';
import {
	CreateUserRequest,
	LoginRequest,
	LoginResponse,
	Context,
	Member,
	StoreState
} from '../../@types';
import { api } from '../../utils';
import { setCookie, removeCookie, getToken } from '../../utils/session';
import * as flash from '../../utils/flash';
import {
	setToken,
	setUser,
	setGreenFlash,
	setRedFlash,
	SetToken,
	SetUser,
	SetRedFlash,
	SetGreenFlash
} from '../creators';

// Auth Actions
export const signUp = (body: CreateUserRequest) => async (
	dispatch: Dispatch<SetToken | SetUser>
) => {
	try {
		const {
			data: { response }
		} = await api.post('/auth/signup', body);
		dispatch(setToken(response.token));
		dispatch(setUser(response.user));
		setCookie('token', response.token);
		const resp: LoginResponse = response;
		return resp;
	} catch (error) {
		throw error.response ? error.response.data : error;
	}
};

export const signIn = (body: LoginRequest) => async (dispatch: Dispatch<SetToken | SetUser>) => {
	try {
		const {
			data: { response }
		} = await api.post('/auth/login', body);
		dispatch(setToken(response.token));
		dispatch(setUser(response.user));
		const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
		const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
		setCookie('token', response.token, null, {
			expires: !body.rememberMe ? tomorrow : nextYear
		});
		ReactGA.set({ userId: response.user._id });
		const resp: LoginResponse = response;
		return resp;
	} catch (error) {
		throw error.response ? error.response.data : error;
	}
};

export const signOut = (ctx?: Context) => async (dispatch: Dispatch<SetToken | SetUser>) => {
	try {
		dispatch(setToken(''));
		dispatch(setUser(null));
		removeCookie('token', ctx);
		ReactGA.set({ userId: null });
	} catch (error) {
		throw error;
	}
};

// Should only be called in the "server-side" context in _app.tsx
// Takes token from cookie and populates redux store w/ token and user object
export const refreshSession = (ctx?: Context) => async (dispatch: Dispatch<SetToken | SetUser>) => {
	try {
		if (ctx && ctx.res && ctx.res.headersSent) return;
		const token = getToken(ctx);
		if (!token) {
			dispatch(setUser(null));
			dispatch(setToken(''));
			removeCookie('token', ctx);
			ReactGA.set({ userId: null });
			return null;
		}
		const {
			data: { response }
		} = await api.get('/auth/me', {
			headers: { Authorization: `Bearer ${token}` }
		});

		dispatch(setUser(response.user));
		dispatch(setToken(response.token));
		setCookie('token', response.token, ctx);
		ReactGA.set({ userId: response.user._id });
		return response;
	} catch (error) {
		console.error('Error refreshing token:', error);
		dispatch(setUser(null));
		dispatch(setToken(''));
		removeCookie('token', ctx);
		ReactGA.set({ userId: null });
		return null;
	}
};

// User actions
export const updateProfile = (body: { name: string }, ctx?: Context, id?: string) => async (
	dispatch: Dispatch<SetToken | SetUser>
) => {
	try {
		const token = getToken(ctx);
		if (!id) id = (decode(token) as any)._id;
		const {
			data: { response }
		} = await api.put(`/users/${id}`, body, {
			headers: { Authorization: `Bearer ${token}` }
		});
		const user: Member = response;
		dispatch(setUser(user));
		return user;
	} catch (error) {
		throw error.response ? error.response.data : error;
	}
};

// Flash Actions
export const sendErrorMessage = (msg: string, ctx?: Context) => (
	dispatch: Dispatch<SetRedFlash>
) => {
	dispatch(setRedFlash(msg));
	flash.set({ red: msg }, ctx);
};

export const sendSuccessMessage = (msg: string, ctx?: Context) => (
	dispatch: Dispatch<SetGreenFlash>
) => {
	dispatch(setGreenFlash(msg));
	flash.set({ green: msg }, ctx);
};

export const clearFlashMessages = (ctx?: Context) => (
	dispatch: Dispatch<SetGreenFlash | SetRedFlash>
) => {
	dispatch(setGreenFlash(''));
	dispatch(setRedFlash(''));
	removeCookie('flash', ctx);
};
