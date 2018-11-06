import axios from 'axios';
import Transport from 'winston-transport';

export class Mail extends Transport {
	log(info, callback) {
		setImmediate(() => {
			this.emit('logged', info);
		});

		axios.post('/api/email', info).catch(err => {
			console.error(err);
		});

		callback();
	}
}
