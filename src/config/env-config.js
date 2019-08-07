require('dotenv').config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const env = process.env;

const sharedConfig = {
	PORT: env.PORT || 5000,
	NODE_ENV: env.NODE_ENV || 'development',
	TRACKING_ID: env.TRACKING_ID || 'my-google-analytics-key',
	VAPID_PUBLIC: env.VAPID_PUBLIC || 'my vapid public key',
	ANALYZE: env.ANALYZE === 'true'
};

const publicRuntimeConfig = {
	API_URL: env.API_URL ? env.API_URL : `http://localhost:${sharedConfig.PORT}/api`,
	...sharedConfig
};

module.exports = {
	publicRuntimeConfig
};
