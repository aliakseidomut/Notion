import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Api from "../utils/api";
import Note from "../components/Note";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  
  const userId = localStorage.getItem('userId');

  useMemo(()=>{
    Api.getUserNotesPromise(userId)
      .then(notes => setNotes(notes))
  }, [userId])

  const handleDelete = (id) => {
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes);
    Api.deleteNote(id);
  };

  return (
    <div>  
      <h1 className="text-center text-2xl font-semibold mt-5 mb-3">Notes</h1>
      <Link className="flex h-10 border-solid border-black border-2 hover:bg-slate-300 justify-center items-center w-32 mx-auto mt-5" to="/notes/create">Add new note</Link>
      <div className="flex flex-col m-5 gap-2">
        {notes.map((el) => <Note key={el.id} id={el.id} title={el.title} createdAt={el.createdAt} onDelete={handleDelete} />)}
      </div>
    </div>  
  )
}