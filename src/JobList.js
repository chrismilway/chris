import React from 'react';
import Fetch from './Fetch';
import ResponsibilitiesList from './ResponsibilitiesList';

export default function JobList({ jobs }) {
	const items = jobs
		.sort((a, b) => parseInt(b.start, 10) - parseInt(a.start, 10))
		.map(job => (
		<li key={job.id}>
			<h3>{job.start}&mdash;{job.end}</h3>
			<p>{job.company ? `${job.company}, ` : ''}{job.title}</p>
			<Fetch sheet={'responsibilities'} end={'C'} render={data => <ResponsibilitiesList responsibilities={data.filter(d => d.job_id === job.id)} />} />
		</li>
	));
	return <ul class="u-unlist">{items}</ul>;
}