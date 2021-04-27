import Head from 'next/head';
import Cats from '../components/Cats';
import styles from '../styles/Layout.module.css';
import { server } from '../config';

export default function Home({ data: cats }) {
	return (
		<div className={styles.container}>
			<h1>Home</h1>
			<Cats cats={cats} />
			<div className={styles.grid}>
				<div className={styles.card}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti
					accusamus reprehenderit fugiat delectus, alias vero non cum odio
					molestiae assumenda cupiditate nobis quas voluptate enim, vitae at
					aspernatur sed.
				</div>
				<div className={styles.card}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti
					accusamus reprehenderit fugiat delectus, alias vero non cum odio
					molestiae assumenda cupiditate nobis quas voluptate enim, vitae at
					aspernatur sed.
				</div>
				<div className={styles.card}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti
					accusamus reprehenderit fugiat delectus, alias vero non cum odio
					molestiae assumenda cupiditate nobis quas voluptate enim, vitae at
					aspernatur sed.
				</div>
				<div className={styles.card}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti
					accusamus reprehenderit fugiat delectus, alias vero non cum odio
					molestiae assumenda cupiditate nobis quas voluptate enim, vitae at
					aspernatur sed.
				</div>
			</div>
		</div>
	);
}
export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/cats`);
	const data = await res.json();
	return {
		props: {
			data,
		},
	};
};

// export const getStaticProps = async () => {
// 	const res = await fetch('https://cat-fact.herokuapp.com/facts');
// 	const data = await res.json();
// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// };
