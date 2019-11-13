import React from 'react';

const TeamMembers = props => {
    return (
        <div className='team-list'>
            {props.teamMembers.map(member => (
                <div className="member" key={member.id}>
                <h2>{member.name}</h2>
                <p>{member.email}</p>
                <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamMembers;