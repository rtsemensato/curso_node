import React from 'react';
import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<p>
				<span className="bold">Get A Pet</span> &copy; 2025
			</p>
		</footer>
	);
}

export default Footer;
