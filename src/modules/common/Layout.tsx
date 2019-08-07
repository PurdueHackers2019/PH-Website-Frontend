import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navbar';
import FlashMessage from './FlashMessage';
import { Member, StoreState } from '../../@types';
import Footer from './Footer';

interface StateToProps {
	token: string;
	user: Member;
	green: string;
	red: string;
	children: React.ReactNode;
}

const Layout = ({ token, user, green, red, children }: StateToProps) => (
	// <div>
	<React.Fragment>
		<Navigation auth={!!token} id={user ? user._id : null} user={user} />
		<div className="pageWrap">
			<FlashMessage green={green} red={red} />
			{children}
		</div>
		{/* <Footer /> */}
	</React.Fragment>
	// </div>
);

const mapStateToProps = (state: StoreState) => ({
	...state.sessionState,
	...state.flashState
});

export default connect(mapStateToProps)(Layout);
