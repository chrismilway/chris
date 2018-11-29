import React from 'react';

export default function SkillList({ skills }) {
	const items = skills.map(skill => (
		<li key={skill.id}><strong>{skill.skill}</strong> {skill.competency}</li>
	));
	return <ul>{items}</ul>
}