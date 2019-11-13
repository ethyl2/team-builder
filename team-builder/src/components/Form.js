import React, { useState } from 'react';

const Form = props => {
    const [person, setPerson] = useState({name: '', email: '', role: ''});

    const handleChanges = event => {
        setPerson( { ...person, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(person);
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='inputName'>Name </label>
            <input id='inputName'
                type='text'
                name='name'
                onChange={handleChanges}
                value={person.name}
            />
            <label htmlFor='inputEmail'>Email </label>
            <input id='inputEmail'
                type='email'
                name='email'
                onChange={handleChanges}
                value={person.email}
            />
            <label htmlFor='inputRole'>Role </label>
            <input id='inputRole'
                type='text'
                name='role'
                onChange={handleChanges}
                value={person.role}
            />
            <button type='submit'>Add Team Member</button>
        </form>
    )
}

export default Form;