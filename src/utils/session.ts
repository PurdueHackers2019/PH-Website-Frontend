// import cookie, { CookieAttributes } from 'js-cookie';
import cookies from 'nookies';
import Router from 'next/router';
import { Member, Context, Permission } from '../@types';
import { sendErrorMessage } from '../redux/actions';

export const setCookie = (key: string, value: string | object, ctx?: Context, options?: object) => {
	return cookies.set(ctx, key, JSON.stringify(value), options);
};

export const removeCookie = (key: string, ctx?: Context) => {
	return cookies.destroy(ctx, key);
};

export const getCookie = (key: string, ctx?: Context) => {
	let value = cookies.get(ctx)[key];
	if (value) return JSON.parse(value);
	return undefined;
};

export const getToken = (ctx?: Context) => {
	let token = getCookie('token', ctx);
	return token;
};

export const redirect = (target: string, ctx?: Context, replace?: boolean) => {
	if (ctx && ctx.res) {
		// Server redirect
		ctx.res.statusCode = replace ? 303 : 301;
		ctx.res.setHeader('Location', target);
	} else {
		// Browser redirect
		replace ? Router.replace(target) : Router.push(target);
	}
	return true;
};

export const extractUser = (ctx: Context) => {
	// Try to get from redux, and if not, req.user
	let user = ctx && ctx.store && ctx.store.getState().sessionState.user;
	return user;
};

export const hasPermission = (user: Member, name: string) =>
	user &&
	(Object.keys(user).length !== 0 && user.constructor === Object) &&
	user.permissions.some(per => per.name === name || per.name === 'admin');

export const isAdmin = (user: Member) => hasPermission(user, 'admin');

export const memberMatches = (user: Member, id: string) =>
	user && (hasPermission(user, 'admin') || user._id === id);

export const isAuthenticated = (ctx: Context, permissions?: Permission[]) => {
	if (!permissions || !permissions.length) return !!getToken(ctx);
	const user = extractUser(ctx);
	if (!user) return false;
	if (!permissions.length) return true;
	if (!permissions.some(role => hasPermission(user, role.name))) return false;
	return true;
};

export const redirectIfNotAuthenticated = (
	path: string,
	ctx: Context,
	{ permissions, msg = 'Permission Denied' }: { permissions?: Permission[]; msg?: string } = {}
): boolean => {
	if (!isAuthenticated(ctx, permissions)) {
		redirect(path, ctx, true);
		sendErrorMessage(msg, ctx)(ctx.store.dispatch);
		return true;
	}

	return false;
};
