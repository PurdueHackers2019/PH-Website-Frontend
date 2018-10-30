/**
 * Winston Documentation lives at https://www.npmjs.com/package/winston
 *
 * Import this module and use logger.info instead of console.log,
 *                            logger.warn instead of console.warn,
 *                        and logger.error instead of console.error.
 */

import { createLogger, format, transports } from 'winston';
import { CONFIG } from './';

const { combine, timestamp, printf } = format;

const customFormat = printf(
	info => `${info.level}: ${info.message}\n\n${JSON.stringify(info.meta)}\n\n${info.timestamp}`
);

const transport =
	// FIXME: Connect to email backend
	CONFIG.NODE_ENV === 'development' ? new transports.Console() : new transports.Console();

export const logger = createLogger({
	transports: [transport],
	format: combine(format.splat(), timestamp(), customFormat)
});

logger.on('error', err => {
	console.log('Logger Error:', err);
});
