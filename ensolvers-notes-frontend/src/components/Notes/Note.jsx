import React from 'react';
import './Note.css'
import { Link } from 'react-router-dom'
import Archive from './Buttons/Archive';
import Unarchive from './Buttons/Unarchive';
import Delete from './Buttons/Delete';

export default function Note({ item }) {

    return <div className='list-group' class='list-group' >
        <div id={item.item_id} class="list-group-item list-group-item-action">
            <Link to={`/notes/${item.item_id}`} style={{ textDecoration: 'none', color: 'inherit' }} >
                <ul>
                    <li>Name: {item.name}</li>
                    <li>Last updated: {item.updatedAt}</li>
                </ul>
            </Link>
            <ul>
                <div className='noteButtons'>
                    {item.archived ? <Unarchive item={item} /> : <Archive item={item} />}
                    <button className='button-6'><Link to={`/notes/createOrEdit/${item.item_id}`} style={{ textDecoration: 'none', color: 'inherit' }} >Edit</Link></button>
                    <Delete id={item.item_id} />
                </div>
            </ul>

        </div>
    </div>

}
