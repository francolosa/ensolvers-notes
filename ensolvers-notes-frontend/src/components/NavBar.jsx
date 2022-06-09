import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import FilterByCategory from './Notes/Buttons/FilterByCategory';
import LogIn from './Notes/Buttons/LogIn';

export default function NavBar() {
    const [seeArchivedNotes, setSeeArchivedNotes] = useState(false);

    const seeArchived = () => {
        setSeeArchivedNotes(true)
    }   

    const seeUnarchived = () => {
        setSeeArchivedNotes(false)
    }   

    return <><div>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} ><h1>My Notes</h1></Link>
        <nav>
            <ul class="nav justify-content-left">
                {seeArchivedNotes ? "" : <li class="nav-item"><Link to="/notes/createOrEdit/" style={{ textDecoration: 'none', color: 'inherit' }} class="nav-link active" aria-current="page">Create notes</Link></li>}
                {seeArchivedNotes ? <li onClick={seeUnarchived} class="nav-item"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} class="nav-link active" aria-current="page">Go back to unarchived notes</Link></li>
                    : <li onClick={seeArchived} class="nav-item"><Link to="/notes/archived/" style={{ textDecoration: 'none', color: 'inherit' }} class="nav-link active" aria-current="page">Archived notes</Link></li>}
            </ul>
        </nav>
    

    </div>

    </>
}