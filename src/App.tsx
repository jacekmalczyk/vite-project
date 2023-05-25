import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import notesService, { Note } from "./services/notes";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    const tmp = fetchNotes();
    tmp.then((n) => {
      return setNotes(n);
    });

    async function fetchNotes(): Promise<Note[]> {
      return await notesService.getAllNotes();
    }
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {notes.map((note: Note) => (
          <div key={note.id}>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
