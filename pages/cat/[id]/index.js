import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const cat = ({ cat }) => {
	// const router = useRouter();
	// const { id } = router.query;
	return (
		<div>
			<h1>This is cat {cat.user.name.first}</h1>
			<img src={cat.user.photo} alt="" />
			<p>{cat.text}</p>
			<br />
			<Link href="/">Go back</Link>
		</div>
	);
};
// export const getServerSideProps = async (context) => {
// 	const res = await fetch(
// 		`https://cat-fact.herokuapp.com/facts/${context.params.id}`
// 	);
// 	const cat = await res.json();

// 	return {
// 		props: {
// 			cat,
// 		},
// 	};
// };
export const getStaticProps = async (context) => {
	const res = await fetch(
		`https://cat-fact.herokuapp.com/facts/${context.params.id}`
	);
	const cat = await res.json();

	return {
		props: {
			cat,
		},
	};
};
export const getStaticPaths = async () => {
	const res = await fetch(`https://cat-fact.herokuapp.com/facts/`);
	const cats = await res.json();
	const ids = cats.map((cat) => cat._id);
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
		// props: {
		// 	cats,
		// },
	};
};
export default cat;
