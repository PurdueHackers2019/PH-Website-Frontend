/**
 * Winston Documentation lives at https://www.npmjs.com/package/winston
 *
 * Import this module and use logger.info instead of console.log,
 *                            logger.warn instead of console.warn,
 *                        and logger.error instead of console.error.
 */

import { createLogger, format, transports } from 'winston';
import { Mail } from './logger-config';
import { CONFIG } from '../config';

const { combine, timestamp, printf, colorize } = format;

const customFormat = printf(
	// eslint-disable-next-line prettier/prettier
	info =>
		`${info.level}: ${info.message}\n\n${JSON.stringify(info.meta, null, '\t')}\n\n${
			info.timestamp
		}`
);

const transport =
	// FIXME: Connect to email backend
	CONFIG.NODE_ENV === 'development' ? new transports.Console() : new Mail();

export const logger = createLogger({
	transports: [transport],
	format: combine(colorize(), format.splat(), timestamp(), customFormat)
});

logger.on('error', err => {
	console.error('Logger Error:', err);
});
