import React from 'react';
import Fetch from './Fetch';
import ResponsibilitiesList from './ResponsibilitiesList';

export default function JobList({ jobs }) {
	const items = jobs.map(job => (
		<li key={job.id}>
			<h2><strong>{job.title}</strong> {job.company}</h2>
			<p>{job.start}&mdash;{job.end}</p>
			<p>{job.desc}</p>
			<Fetch sheet={'responsibilities'} end={'C'} render={data => <ResponsibilitiesList responsibilities={data.filter(d => d.job_id === job.id)} />} />
		</li>
	));
	return <ul>{items}</ul>
}