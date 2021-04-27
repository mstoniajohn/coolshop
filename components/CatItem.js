import React from 'react';
import Link from 'next/link';

const CatItem = ({ cat }) => {
	return (
		<Link href="/cat/[id]" as={`/cat/${cat._id}`}>
			<a className="">
				<h3>{cat.type}</h3>
				<p>{cat.text}</p>
			</a>
		</Link>
	);
};

export default CatItem;
