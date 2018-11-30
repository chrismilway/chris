import React from 'react';
import Fetch from './Fetch';
import List from './List';
import SkillList from './SkillList';
import JobList from './JobList';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Fetch sheet={'bio'} render={data => <div>{data.map(d => <p>{d.value}</p>)}</div>} />
        <Fetch sheet={'jobs'} end={"F"} render={data => <List items={data} label="Employment history" render={d => <JobList jobs={d} />} />} />
        <Fetch sheet={'skills'} end={"C"} render={data => <List items={data} label="Skills" render={d => <SkillList skills={d} />} />} />
        <Fetch sheet={'interests'} render={data => <List items={data} label="Interests" render={d => <p>{d.map(i => i.value).join(', ')}</p>} />} />
      </div>
    );
  }
}
