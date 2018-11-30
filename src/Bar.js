import React from 'react';
import './Bar.css';

export default function Bar({ value }) {
	return (
		<div className="bar">
			<div className="bar__inner" style={{width: `${value * 100}%`}} />
		</div>
	);
}