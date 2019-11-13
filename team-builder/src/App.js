import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers';
import TeamMemberForm from './components/Form';

import { Jumbotron } from 'reactstrap';

function App() {
  const [ teamList, setTeamList ] = useState([
    {
      id: 1,
      name: 'Heather',
      email: 'zzzuzz@gmail.com',
      role: 'frontend engineer'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamList([ ...teamList, newMember]);
  }

  return (
    <div className="App">
      <Jumbotron>
        <h1>My Development Team</h1>
      </Jumbotron>
     
      <TeamMemberForm addNewMember={addNewMember} />
      <TeamMembers teamMembers={teamList} />
    </div>
  );
}

export default App;
