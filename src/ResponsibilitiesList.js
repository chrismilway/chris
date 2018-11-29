import React from 'react';

export default function ResponsibilitiesList({ responsibilities }) {
	console.log(responsibilities);
	const items = responsibilities.map(res => (
		<li key={res.id}>{res.text}</li>
	));
	return <ul>{items}</ul>
}