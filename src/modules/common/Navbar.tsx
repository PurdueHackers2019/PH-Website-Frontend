import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Nav, NavItem, MenuItem, Navbar, NavDropdown } from 'react-bootstrap';
import { hasPermission } from '../../utils/session';
import routes from '../../constants';

const CommonNav = () => (
	<React.Fragment>
		<NavItem href={routes.MEMBERS}>Members</NavItem>
		<NavItem href={routes.EVENTS}>Events</NavItem>
		<NavItem href={routes.CALENDAR}>Calendar</NavItem>
	</React.Fragment>
);

const OrganizerDropdown = ({ user }) => (
	<NavDropdown title="Organizers" id="protected-nav-dropdown">
		<style>{'.privateItem a {padding-top: 5px !important;}'}</style>
		{hasPermission(user, 'permissions') && (
			<MenuItem className="privateItem" href={routes.PERMISSIONS}>
				Permissions
			</MenuItem>
		)}
		{hasPermission(user, 'credentials') && (
			<MenuItem className="privateItem" href={routes.CREDENTIALS}>
				Credentials
			</MenuItem>
		)}
	</NavDropdown>
);

const PHNavbar = ({ auth, id, user }) => (
	<Navbar collapseOnSelect bsStyle="default" style={{ marginBottom: '10px', maxWidth: '100%' }}>
		<Navbar.Header>
			<Link href="/">
				<a id="nav-brand" className="navbar-brand">
					<div className="nav-logo" />
					<span className="nav-name">Purdue Hackers</span>
				</a>
			</Link>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				{auth && id ? (
					<React.Fragment>
						<li role="presentation">
							<Link href={`/member/${id}`}>
								<a>Profile</a>
							</Link>
						</li>
						<CommonNav />
						{(hasPermission(user, 'permissions') ||
							hasPermission(user, 'credentials')) && (
							<OrganizerDropdown user={user} />
						)}
						<li role="presentation">
							<Link href={routes.LOGOUT}>
								<a>Logout</a>
							</Link>
						</li>
					</React.Fragment>
				) : (
					<React.Fragment>
						<CommonNav />
						<NavItem href={routes.LOGIN}>Login</NavItem>
						<NavItem href={routes.SIGNUP}>Join</NavItem>
					</React.Fragment>
				)}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

PHNavbar.propTypes = {
	auth: PropTypes.bool,
	id: PropTypes.string,
	user: PropTypes.object
};

PHNavbar.defaultProps = {
	auth: null,
	id: null,
	user: null
};

OrganizerDropdown.propTypes = { user: PropTypes.object };

OrganizerDropdown.defaultProps = { user: null };

// export default Navbar;
export default PHNavbar;
