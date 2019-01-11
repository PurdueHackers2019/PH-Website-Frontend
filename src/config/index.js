export const CONFIG = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	SERVER_URL:
		process.env.NODE_ENV === 'production'
			? 'https://purduehackers.herokuapp.com'
			: process.env.REACT_APP_SERVER_URL
				? process.env.REACT_APP_SERVER_URL
				: 'http://localhost:5000'
};
