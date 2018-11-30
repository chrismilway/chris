import React from 'react';
import Bar from './Bar';

export default function SkillList({ skills }) {
	const items = skills.map(skill => (
		<li key={skill.id}>
			<strong>{skill.skill}</strong>
			<Bar value={skill.competency} />
		</li>
	));
	return <ul class="u-unlist u-cols-3">{items}</ul>;
}