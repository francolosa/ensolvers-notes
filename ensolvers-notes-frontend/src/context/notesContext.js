import React, { useState, useEffect, createContext } from 'react';

export const NotesContext = createContext([]);

export default function NotesContextProvider({ children }) {
    const [notes, setNotes] = useState([]);
    const [listArchivedNotes, setListArchivedNotes] = useState(false);
    const [globalState, setGlobalState] = useState(0);

    useEffect(() => {
        notesDb()
    }, [globalState])

    const onSetSeeArchived = (state) => {
        { listArchivedNotes ? setListArchivedNotes(false) : setListArchivedNotes(true) };
    }

    const notesDb = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/items');
            const fetchData = await response.json();
            setNotes(fetchData.data)
        } catch (error) {
            console.log(error)
        }
    }

    const archiveItem = async (item) => {
        let archivedStatus = !item.archived;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item_id: item.item_id, archived: archivedStatus })
        }
        try {
            const response = await fetch("http://localhost:3000/api/items/archive", requestOptions)
            let status = await response.json()
            console.log(status)
            setGlobalState(globalState+1)
        } catch (error) {
            console.log(error)
        }

    }

    const deleteItem = async (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item_id: id })
        }
        try {
            const response = await fetch("http://localhost:3000/api/items/delete", requestOptions)
            let status = await response.json()
            console.log(status)
            setGlobalState(globalState+1)
        } catch (error) {
            console.log(error)
        }

    }

    const createItem = async (name, content) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, content: content })
        }
        try {
            const response = await fetch("http://localhost:3000/api/items/create", requestOptions)
            let status = await response.json()
            console.log(status)
            setGlobalState(globalState+1)
        } catch (error) {
            console.log(error)
        }
    }

    const editItem = async (id, name, content) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, name: name, content: content })
        }
        try {
            const response = await fetch("http://localhost:3000/api/items/edit", requestOptions)
            let status = await response.json()
            console.log(status)
            setGlobalState(globalState+1)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <NotesContext.Provider value={{ notes, archiveItem, deleteItem, createItem, editItem, onSetSeeArchived, listArchivedNotes }}>
            {children}
        </NotesContext.Provider>
    )
}