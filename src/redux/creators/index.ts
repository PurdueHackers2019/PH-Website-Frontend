import { AUTH_USER_SET, AUTH_TOKEN_SET, FLASH_GREEN_SET, FLASH_RED_SET } from '../constants';
import { Member } from '../../@types';

// Action Types
export interface SetToken {
	type: typeof AUTH_TOKEN_SET;
	token: string;
}
export interface SetUser {
	type: typeof AUTH_USER_SET;
	user: Member;
}

export interface SetGreenFlash {
	type: typeof FLASH_GREEN_SET;
	green: string;
}
export interface SetRedFlash {
	type: typeof FLASH_RED_SET;
	red: string;
}

// Action Creators
export const setToken = (token: string): SetToken => ({ type: AUTH_TOKEN_SET, token });
export const setUser = (user: Member): SetUser => ({ type: AUTH_USER_SET, user });

export const setGreenFlash = (green: string): SetGreenFlash => ({ type: FLASH_GREEN_SET, green });
export const setRedFlash = (red: string): SetRedFlash => ({ type: FLASH_RED_SET, red });

// All creator types
export type SessionAction = SetToken | SetUser;
export type FlashAction = SetGreenFlash | SetRedFlash;
