import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NotesContext } from '../../context/notesContext';
import Archive from './Buttons/Archive';
import Unarchive from './Buttons/Unarchive';
import Delete from './Buttons/Delete';

export default function NoteDetail(){
    const { id } = useParams();
    const { notes } = useContext(NotesContext);
 
    const foundItem = (element) => {
        return element.item_id == id;
    }
    const note = notes.filter(foundItem)

    return <div className='details'>
        <div className='noteDetail' class='list-group' clasName='details'>
        <div class="list-group-item list-group-item-action">
        <ul>
            <li>Name: {note[0].name}</li>
            <li>Last updated: {note[0].updatedAt}</li>
            <li>Content: {note[0].content}</li>
        </ul>
                <div className='noteButtons'>
                    { note[0].archived? <Unarchive/> : <Archive id={note[0].item_id} /> }
                    <button className='button-6'><Link to={`/notes/createOrEdit/${note[0].item_id}`} style={{textDecoration:'none', color:'inherit'}} >Edit</Link></button>
                    <Delete key={note[0].id} />
                </div>
                </div>
    </div>
    </div>

}