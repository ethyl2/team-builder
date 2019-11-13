import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';

const TeamMembers = props => {
    return (
        <div className='team-list'>
            {props.teamMembers.map(member => (
                    
                <Card className="member" key={member.id}>
                    <CardHeader>{member.name}</CardHeader>
                    <CardBody>
                        <CardTitle>{member.role}</CardTitle>
                        <CardText><address>
                            <a href={`mailto:${member.email}`}>{member.email}</a></address>
                        </CardText>
                    </CardBody>
                </Card>
                        
            ))}
        </div>
    )
}

export default TeamMembers;