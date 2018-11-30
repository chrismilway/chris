import React from 'react';

export default function List({ items, render, label }) {
	const rendered = render(items);
	return (
		<section>
			<h2><span class="highlight">{label}</span></h2>
			{rendered}
		</section>
	);
}