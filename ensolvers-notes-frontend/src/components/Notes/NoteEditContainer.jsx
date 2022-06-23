import React, { useContext, useState, useEffect } from 'react';
import { NotesContext } from '../../context/notesContext';
import { useParams, Link } from 'react-router-dom';

export default function NoteEditContainer() {
    const { notes, createItem, editItem } = useContext(NotesContext);
    const { id } = useParams();
    const [save, setSave] = useState(false);

    const [name, setName] = useState();
    const [content, setContent] = useState();

    const handleNameChange = event => setName(event.target.value);
    const handleTextAreaChange = event => setContent(event.target.value)

    useEffect(() => {

        const foundItem = (element) => {
            return element.item_id == id;
        }
        const note = notes.filter(foundItem)

        if (!isNaN(id)) {
            setName(note[0].name)
            setContent(note[0].content)
        }
    }, [id])


    const onSubmit = async (evt) => {
        setSave(true)
        evt.preventDefault();
        if (id) {
            await editItem(id, name, content)
            console.log("hay id")
        } else {
            await createItem(name, content)
        }
    }

    return <>

        <div class="mb-3" className="form">
            <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="title" value={name} onChange={handleNameChange} />

                <label for="content" class="form-label">Content</label>
                <textarea class="form-control" id="content" rows="5" value={content} onChange={handleTextAreaChange}></textarea>
                {save ? " " : <button type="" class="btn btn-outline-secondary" className="button-6">Cancel</button>}
                {save ? <Link to="/"><button class="btn btn-success" className='button-6'>Back to my notes</button></Link> : <button type="submit" className='button-6' >Save</button>}
            </form>

        </div>
    </>

}

