import { NextPageContext } from 'next';
import { Store } from 'redux';
import { FlashState } from '../redux/reducers/flash';
import { SessionState } from '../redux/reducers/session';

export interface StoreState {
	flashState: FlashState;
	sessionState: SessionState;
}

export interface Context extends NextPageContext {
	store: Store<StoreState>;
	// req: Request;
	// res: Response;
}

export interface Member {
	_id: string;
	name: string;
	email: string;
	graduationYear: number;
	gender?: string;
	unsubscribed?: boolean;
	privateProfile?: boolean;
	phone?: string;
	setupEmailSent?: Date;
	major?: string;
	picture?: string;
	description?: string;
	facebook?: string;
	github?: string;
	linkedin?: string;
	devpost?: string;
	website?: string;
	resume?: string;
	resumeLink?: string;
	createdAt: string;
	updatedAt: string;
	permissions: Permission[];
}

export interface Event {
	_id: string;
	name: string;
	location: string;
	eventTime: Date;
	facebook: string;
	privateEvent: boolean;
	members: Member[];
	createdAt: string;
	updatedAt: string;
}

export interface Credential {
	_id: string;
	site: string;
	username: string;
	password: string;
	description: string;
	createdAt: string;
	updatedAt: string;
}

export interface Permission {
	_id: string;
	name: string;
	description: string;
	members: {
		member: Member;
		recordedBy: Member;
		dateAdded: Date;
	}[];
	createdAt: string;
	updatedAt: string;
}

export interface Location {
	_id: string;
	name: string;
	city: string;
	loc: any;
	members: {
		member: Member;
		dateStart: Date;
		dateEnd: Date;
	}[];
	lat: number;
	lng: number;
}

export interface Job {
	_id: string;
	name: string;
	city: string;
	start: Date;
	end: Date;
	memberID: string;
	member: Member;
	location: Location;
}

export type flashColor = 'red' | 'green';
export type flashType = { [key in flashColor]?: string };

// Request types
export interface CreateUserRequest {
	name: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

export interface LoginRequest {
	email: string;
	password: string;
	rememberMe: boolean;
}

// Response types
export interface LoginResponse {
	token: string;
	user: Member;
}
