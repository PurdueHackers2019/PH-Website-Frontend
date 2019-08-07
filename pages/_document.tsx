import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="author" content="Purdue Hackers" />
					<meta
						name="description"
						content="Purdue Hackers is a group of students who like having fun with computers and technology. We do not use hacking to mean 'cracking security systems.' Only movies do that."
					/>
					<meta
						name="keywords"
						content="college, university, purdue, hackers, member, members, membership, events, hackathon, hack-a-thon, mlh, boilermake, boilermaker, anvil, boilercamp, lafayette, lawson, LWSN, computer, science, launchpad, ignite, sponsor, sponsorship"
					/>

					{/* Bootstrap CSS */}
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
						integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
						crossOrigin="anonymous"
					/>

					{/* Fonts */}
					<link
						href="https://fonts.googleapis.com/css?family=Montserrat"
						rel="stylesheet"
						type="text/css"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Roboto+Slab:300"
						rel="stylesheet"
						type="text/css"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Lato:400,900"
						rel="stylesheet"
						type="text/css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
