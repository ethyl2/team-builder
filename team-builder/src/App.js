import React, { useState } from 'react';
import './App.css';
import TeamMembers from './components/TeamMembers';
import TeamMemberForm from './components/Form';

import { Jumbotron } from 'reactstrap';

function App() {
  const [ teamList, setTeamList ] = useState([
    {
      id: '1',
      name: 'Heather',
      email: 'zzzuzz@gmail.com',
      role: 'Front-End Engineer'
    }, 
    { id: '2',
      name: 'Paul',
      email: 'paulhnuffer@gmail.com',
      role: 'Designer'
    },
    {
      id: '3',
      name: 'Rose',
      email: 'rosenuffer@gmail.com',
      role: 'Data Scientist'
    },
    {
      id: '4',
      name: 'Thomas',
      email: 'tom@tomdabomb.com',
      role: 'Other Position'
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

  const [memberToEdit, setMemberToEdit] = useState('');

  const addMemberToEdit = member => {
    setMemberToEdit(member);
  }

  const editMember = member => {
    let restOfList = teamList.filter(person => person.id !== member.id);
    restOfList.unshift(member);
    setTeamList(restOfList);
    setMemberToEdit('');
    
  }

  return (
    <div className="App">
      <Jumbotron className="heading">
        <h1>My Development Team</h1>
      </Jumbotron>
     
      <TeamMemberForm addNewMember={addNewMember} memberToEdit={memberToEdit}
        editMember={editMember}/>
      <TeamMembers teamMembers={teamList} addMemberToEdit={addMemberToEdit}/>
    </div>
  );
}

export default App;
