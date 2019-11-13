import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form';

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
     <h1>My Team</h1>
     <Form addNewMember={addNewMember} />
     <TeamMembers teamMembers={teamList} />
    </div>
  );
}

export default App;
