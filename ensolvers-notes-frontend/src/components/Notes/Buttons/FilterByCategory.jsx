import React, { useContext } from 'react';
import { NotesContext } from '../../../context/notesContext';

export default function Archive({ id }) {
    const { archiveItem } = useContext(NotesContext);



    return <div>

        <form action="/action_page.php">
            <label for="category">Category Filter</label>
            <select id="category" name="category">
                <option value="information">information</option>
                <option value="daily">daily</option>
                <option value="frequent-use">frequent-use</option>
            </select>
        </form>
    </div>
}
