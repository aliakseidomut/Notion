import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Api from "../utils/api";

export default function EditNote() {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    Api.getNotePromise(id)
      .then(note => {
        setTitle(note.title);
        setText(note.text);
        setAuthorId(note.authorId);
        setCreatedAt(note.createdAt);
      })
  }, [id])

  const handleSave = () => {
    
    if(!title){
      setError(true);
      throw new Error('Поле name пустое');
    }

    setError(false);

    Api.editNote({id, authorId, title, text, createdAt})

    Api.getUserNotesPromise(localStorage.getItem("userId"))
      .then(() => navigate(`/notes/${id}/view`))
  }

  return (
    <div>
      <header className="flex">
        <Link 
          className="flex h-7 border-solid border-black border-2 hover:bg-slate-300 justify-center items-center w-16 mt-5" 
          to="/notes"
        >
          Back
        </Link>
        <h1 className="text-center text-2xl font-semibold mt-5 mb-3 mx-auto">
          Edit note
        </h1>      
      </header>
      <div className="flex flex-col gap-2">
        <input 
          value={title} 
          className="border-2 pl-0.5" 
          type="text" 
          placeholder="Name" 
          onChange={(e) => setTitle(e.target.value)} 
        />
        {error && <h3 className="font-medium text-red-600">Введите название заметки</h3>}

        <textarea 
          value={text} 
          className="border-2 pl-0.5" 
          placeholder="Note text..." 
          onChange={(e) => setText(e.target.value)} 
        />
      </div>
      <button 
        className="flex h-10 border-solid border-black border-2 hover:bg-slate-300 justify-center items-center w-32 mx-auto mt-5" 
        to="/notes/create" 
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  )
}
