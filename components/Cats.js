import React from 'react';
import CatItem from './CatItem';

const Cats = ({ cats }) => {
	return (
		<div>
			{cats.map((cat) => (
				<div key={cat._id}>
					<CatItem cat={cat} />
				</div>
			))}
		</div>
	);
};

export default Cats;
