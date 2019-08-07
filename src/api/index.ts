import { api } from '../utils';
import { getToken } from '../utils/session';
import { Event, Credential, Permission, Job } from '../@types';

// Auth Actions
export const forgotPassword = async (email: string) => {
	try {
		const {
			data: { response }
		} = await api.post('/auth/forgot', { email });
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const resetPassword = async (password: string, passwordConfirm: string, token: string) => {
	try {
		const {
			data: { response }
		} = await api.post('/auth/reset', { password, passwordConfirm, token });
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

// Members Actions
export const fetchMember = async (id: string, params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get(`/members/${id}`, {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const addOrganizer = async (email: string) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.post(
			'/members/organizer',
			{ email },
			{
				headers: { Authorization: `Bearer ${token}` }
			}
		);
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const fetchMemberEvents = async (id: string, params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get(`/members/${id}/events`, {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const fetchMemberJobs = async (id: string, params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get(`/members/${id}/jobs`, {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

// Events Actions
export const fetchEvents = async (params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get('/events', {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const fetchEvent = async (id: string, params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get(`/events/${id}`, {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const createEvent = async (event: Event) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.post('/events/', event, {
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const updateEvent = async (id: string, event: Event) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.post(`/events/${id}`, event, {
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const deleteEvent = async (id: string) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.delete(`/events/${id}`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const checkinEvent = async (id: string, name: string, email: string) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.post(
			`/events/${id}/checkin`,
			{
				name,
				email
			},
			{
				headers: { Authorization: `Bearer ${token}` }
			}
		);
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const checkoutEvent = async (id: string, memberID: string) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.delete(`/events/${id}/checkin/${memberID}`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

// Credentials Actions
export const fetchCredentials = async (params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get('/credentials', {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const addCredential = async (credential: Credential) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.post('/credentials', credential, {
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const deleteCredential = async (id: string) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.delete(`/credentials/${id}`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

// Permissions Actions
export const fetchPermissions = async (params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get('/permissions', {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const fetchPermission = async (id: string, params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get(`/permissions/${id}`, {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const addPermission = async (permission: Permission, params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.post('/permissions/', permission, {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const deletePermission = async (id: string, params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.delete(`/permissions/${id}`, {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const addUserToPermission = async (id: string, email: string, params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.post(
			`/permissions/${id}`,
			{ email },
			{
				params,
				headers: { Authorization: `Bearer ${token}` }
			}
		);
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const removeUserFromPermission = async (id: string, memberID: string, params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.delete(`/permissions/${id}/member/${memberID}`, {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

// Jobs Actions
export const addJob = async (job: Job) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.post('/jobs', job, {
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const deleteJob = async (id: string) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.delete(`/jobs/${id}`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const fetchJobs = async () => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get('/jobs', {
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

// Locations Actions
export const fetchLocations = async () => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get('/locations', {
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const fetchLocation = async (id: string) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get(`/locations/${id}`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const updateLocation = async (id: string, name: string, city: string) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.post(
			`/locations/${id}`,
			{ name, city },
			{
				headers: { Authorization: `Bearer ${token}` }
			}
		);
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

// Autocomplete Actions
export const autocompleteMembers = async (params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get('/autocomplete/members/', {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const autocompleteLocations = async (params: any) => {
	try {
		const token = getToken();
		const {
			data: { response }
		} = await api.get('/autocomplete/locations/', {
			params,
			headers: { Authorization: `Bearer ${token}` }
		});
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

// Report Actions
export const fetchMembersReport = async () => {
	try {
		const {
			data: { response }
		} = await api.get('/report/members');
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

export const fetchEventReport = async (id: string) => {
	try {
		const {
			data: { response }
		} = await api.get(`/report/event/${id}`);
		return response;
	} catch (error) {
		throw error.response.data;
	}
};

