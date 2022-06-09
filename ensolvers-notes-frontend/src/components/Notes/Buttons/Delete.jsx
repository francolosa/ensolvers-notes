import React, { useContext } from 'react';
import { NotesContext } from '../../../context/notesContext';

export default function Delete ({id}){
    const { deleteItem } = useContext(NotesContext);

    const onDeleteItem = async (evt) => {
        evt.preventDefault()
        let confirm = window.confirm("Please Confirm")
        if(confirm){
            deleteItem(id)
        }
    }

    return <button onClick={onDeleteItem} className='button-6' >
        Delete
    </button>
}