import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { Store } from 'redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faCalendar, faCoffee, faHeart } from '@fortawesome/fontawesome-free-solid';
import makeStore from '../src/redux/store';
import {
	clearFlashMessages,
	sendErrorMessage,
	sendSuccessMessage,
	refreshSession
} from '../src/redux/actions';
import Layout from '../src/modules/common/Layout';
import { initGA, logPageView } from '../src/utils/analytics';
import * as flash from '../src/utils/flash';
import { StoreState } from '../src/@types';
import '../src/index.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'sanitize.css/sanitize.css';

(library as any).add(faFacebook, faGithub, faTwitter, faEnvelope, faCalendar, faCoffee, faHeart);

interface Props {
	store: Store<StoreState>;
}

@((withRedux as any)(makeStore))
export default class MyApp extends App<Props> {
	static async getInitialProps({ Component, ctx }) {
		if (ctx.req) {
			await ctx.store.dispatch(refreshSession(ctx));
			if (!ctx.res.headersSent) {
				const messages = flash.get(ctx);
				if (messages.red) ctx.store.dispatch(sendErrorMessage(messages.red, ctx));
				if (messages.green) ctx.store.dispatch(sendSuccessMessage(messages.green, ctx));
			}
		}

		return {
			pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
		};
	}

	componentWillMount() {
		Router.events.on('routeChangeStart', () => {
			const { store } = this.props;
			const { flashState } = store.getState();
			if (flashState.green || flashState.red) store.dispatch(clearFlashMessages() as any);
		});
	}

	componentDidMount() {
		const { store } = this.props;
		const { sessionState } = store.getState();
		const uid = sessionState.user && sessionState.user._id;
		initGA(uid);
		logPageView();
		Router.router.events.on('routeChangeComplete', logPageView);
		window.onbeforeunload = () => {
			const { flashState } = store.getState();
			if (flashState.green || flashState.red) store.dispatch(clearFlashMessages() as any);
		};
	}

	render() {
		const { Component, pageProps, store } = this.props as any;
		return (
			<Container>
				<Head>
					<title>Purdue Hackers</title>
				</Head>
				<Provider store={store}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</Container>
		);
	}
}
