import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import NotesListContainer from './components/Notes/NotesListContainer';
import NotesArchivedListContainer from './components/Notes/NotesArchivedListContainer';
import NotesContextProvider from './context/notesContext';
import NoteDetail from './components/Notes/NoteDetail';
import NoteEditContainer from './components/Notes/NoteEditContainer';
//import NoteDelete from './components/Notes/NoteDelete';

function App() {
  return (
    <BrowserRouter>
        <NotesContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<NotesListContainer />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
          <Route path="/notes/createOrEdit/:id" element={<NoteEditContainer />} />
          <Route path="/notes/createOrEdit/" element={<NoteEditContainer />} />
          <Route path="/notes/archived/" element={<NotesArchivedListContainer />} />
        </Routes>
      </NotesContextProvider>

    </BrowserRouter>
  );
}

export default App;
