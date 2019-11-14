import React from 'react';
import { Card, CardHeader, CardBody, Button,
    CardTitle, CardText } from 'reactstrap';

const TeamMembers = props => {     
    return (
        <div className='team-list'>
            {props.teamMembers.map(member => {
                return (    
                <Card className="member" key={member.id} style={{border: `3px solid ${member.color}`}}>
                    <CardHeader>{member.name}</CardHeader>
                    <CardBody>
                        <CardTitle>{member.role}</CardTitle>
                        <CardText>
                            <a href={`mailto:${member.email}`}>{member.email}</a>
                        </CardText>
                        <Button onClick={() => props.addMemberToEdit(member)}>Edit</Button>
                    </CardBody>
                </Card>
                )           
            })}
        </div>
    )
}

export default TeamMembers;