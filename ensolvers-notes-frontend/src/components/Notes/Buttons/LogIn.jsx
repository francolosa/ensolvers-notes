import React, { useState } from 'react';
import { NotesContext } from '../../../context/notesContext';
import LogInForm from '../Buttons/LogInForm'

export default function LogIn (){
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ logInView, setLogInView ] = useState(false)

    const onLogInView = () => {
        setLogInView(true)
        console.log(logInView)
    }

    return <div>
                { logInView ? <LogInForm/> : ""}
        { !loggedIn ? <a onClick={onLogInView} class="nav-link active" aria-current="page">Log In</a> : <a OnClick class="nav-link active" aria-current="page"> Log Out</a> }
        </div>
}