import React from 'react';
import Fetch from './Fetch';
import SkillList from './SkillList';
import JobList from './JobList';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Fetch sheet={'skills'} end={"C"} render={data => <SkillList skills={data} />} />
        <Fetch sheet={'jobs'} end={"F"} render={data => <JobList jobs={data} />} />
      </div>
    );
  }
}
