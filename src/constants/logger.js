/**
 * Winston Documentation lives at https://www.npmjs.com/package/winston
 *
 * Import this module and use logger.info instead of console.log,
 *                            logger.warn instead of console.warn,
 *                        and logger.error instead of console.error.
 */

import { createLogger, format, transports } from 'winston';
import { Mail } from './logger-config';
import * as colorJSON from 'json-colorizer';
import { CONFIG } from './';

const { combine, timestamp, printf, colorize } = format;

// FIXME: JSON Colorizer doesn't work here, but works in the shell
const customConsoleFormat = printf(
	// eslint-disable-next-line prettier/prettier
	info =>
		`[${info.level}] [${info.timestamp}]\n\n${info.message} ${colorJSON(
			JSON.stringify(info.meta, null, '\t')
		)}\n\n`
);

const customMailFormat = printf(
	// eslint-disable-next-line prettier/prettier
	info => `[${info.level.toUpperCase()}] [${info.timestamp}]\n\n${info.message} ${info.meta}\n\n`
);

const transport =
	CONFIG.NODE_ENV === 'development'
		? new transports.Console({
				format: combine(
					format(info => {
						info.level = info.level.toUpperCase();
						return info;
					})(),
					colorize(),
					format.splat(),
					timestamp(),
					customConsoleFormat
				)
		  })
		: new Mail({ format: combine(format.splat(), timestamp(), customMailFormat) });

export const logger = createLogger({
	transports: [transport]
});

logger.on('error', err => {
	console.error('Logger Error:', err);
});
