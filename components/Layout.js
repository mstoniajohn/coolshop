import React from 'react';
import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Head from 'next/head';

const Layout = ({ title, keywords, description, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Nav />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
				<footer>sme</footer>
			</div>
		</>
	);
};
Layout.defaultProps = {
	title: 'SME Lifestyle',
	description: 'Coming soon',
	keywords: 'music, events',
};
export default Layout;
