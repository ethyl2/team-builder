import React, { useState } from 'react';

const Form = props => {
    const [person, setPerson] = useState({name: '', email: '', role: ''});

    const handleChanges = event => {
        setPerson( { ...person, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(person);
        setPerson({name: '', email: '', role: ''});
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
            <select id='inputRole' 
                onChange={handleChanges} 
                name='role' 
                value={person.role}>
                <option value='Designer'>Designer</option>
                <option value='UI/UX Engineer'>UI Engineer</option>
                <option value='Front-End Engineer'>Front-End Engineer</option>
                <option value='Back-End Engineer'>Back-End Engineer</option>
                <option value='Data Scientist'>Data Scientist</option>
                <option value='Project Manager'>Project Manager</option>
                <option value='Other Position'>Other Position</option>
            </select>
            
            <button type='submit'>Add Team Member</button>
        </form>
    )
}

export default Form;