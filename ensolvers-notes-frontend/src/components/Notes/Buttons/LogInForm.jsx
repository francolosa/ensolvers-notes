import React from 'react';

export default function LogInForm() {

    return <div>
        <form onSubmit="">
            <label for="name"> Name
                <input type="text"></input>
            </label>
            <label for="password">Password
                <input type="password"></input>
            </label>
        </form>
    </div>
}