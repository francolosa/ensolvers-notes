import React, { useContext } from 'react';
import { NotesContext } from '../../../context/notesContext';

export default function Archive ({ item }){
    const { archiveItem } = useContext(NotesContext);

    const onArchiveItem = (evt) => {
        evt.preventDefault()
        archiveItem(item)
    }

    return <button onClick={onArchiveItem} className='button-6'>
        Unarchive
    </button>
}