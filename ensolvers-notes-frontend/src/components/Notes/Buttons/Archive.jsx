import React, { useContext, useState } from 'react';
import { NotesContext } from '../../../context/notesContext';
import { Link } from 'react-router-dom'
export default function Archive ({ item }){
    const { archiveItem } = useContext(NotesContext);
    const [archive, setArchive ] = useState(false);

    const onArchiveItem = (evt) => {
        evt.preventDefault()
        setArchive(true)
        archiveItem(item)
    }

    return <div>
        { archive ? <Link to="/"><button className='button-6'>Back to my notes</button></Link> : <button onClick={onArchiveItem} className='button-6'>Archive</button> }       
        </div>
}