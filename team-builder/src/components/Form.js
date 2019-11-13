import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const TeamMemberForm = props => {
    const [person, setPerson] = useState({name: '', email: '', role: ''});

    const handleChanges = event => {
        setPerson( { ...person, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        if (props.memberToEdit) {
            props.editMember(person);
        } else {
        props.addNewMember(person);
        }
        setPerson({name: '', email: '', role: ''});
    }

    useEffect(() => {
        console.log(props.memberToEdit);
        setPerson(props.memberToEdit);
    }, [props.memberToEdit]);

    return (
        <Form className='form' onSubmit={submitForm}>

            <FormGroup>
                <Label htmlFor='inputName'>Name </Label>
                <Input id='inputName'
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    value={person.name}
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor='inputEmail'>Email </Label>
                <Input id='inputEmail'
                    type='email'
                    name='email'
                    onChange={handleChanges}
                    value={person.email}
                />
            </FormGroup>

            <FormGroup>
                <Label htmlFor='inputRole'>Role </Label>
                <Input type='select' id='inputRole' 
                    onChange={handleChanges} 
                    name='role' 
                    value={person.role}>
                    <option value='Designer'>Designer</option>
                    <option value='UI/UX Engineer'>UI Engineer</option>
                    <option value='Front-End Engineer'>Front-End Engineer</option>
                    <option value='Back-End Engineer'>Back-End Engineer</option>
                    <option value='Mobile Developer'>Mobile Developer</option>
                    <option value='Data Scientist'>Data Scientist</option>
                    <option value='Project Manager'>Project Manager</option>
                    <option value='Other Position'>Other Position</option>
                </Input>
            </FormGroup>
            
            <Button type='submit'>{
                props.memberToEdit !== ''? 'Edit Member': 'Add Team Member'}</Button>
        </Form>
    )
}

export default TeamMemberForm;