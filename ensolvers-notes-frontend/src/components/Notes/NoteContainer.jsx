import React, { useContext } from 'react';
import Note from './Note';
import { NotesContext } from '../../context/notesContext';

export default function NoteContainer() {
    const { notes } = useContext(NotesContext);

    const listArchived = (item) => {
        return item.archived === false;
    }
    const result = notes.filter(listArchived)
    
    return <div className='noteContainer'>
        {
            result.map((item)=>{
                return <Note item={item}/>
            })
        }
    </div>
    
}