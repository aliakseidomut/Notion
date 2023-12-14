import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../redux/user/selectors";
import { createNote } from "../redux/notes/actions";

export default function CreateNote() {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  
  const [error, setError] = useState(null);

  const authorId = useSelector(selectUserId);

  const navigate = useNavigate();

  const handleCreate = () => {
    const note = {
      authorId,
      title,
      text,
      createdAt: Date.now()
    }
    
    if(!note.title){
      setError(true);
      throw new Error('Поле name пустое');
    }

    setError(false);

    dispatch(createNote(note));
    navigate('/notes');
  }

  return (
    <div>
      <header className="flex">
        
        <Link 
          className="flex h-7 border-solid border-black border-2 hover:bg-slate-300 justify-center items-center w-16 mt-5" 
          to="/notes">
            Back
        </Link>
        
        <h1 className="text-center text-2xl font-semibold mt-5 mb-3 mx-auto">
          Create new note
        </h1>      
      </header>
      
      <div className="flex flex-col gap-2">
        <input 
          className="border-2 pl-0.5" 
          type="text" 
          placeholder="Name" 
          onChange={(e) => setTitle(e.target.value)} 
        />
        {error && <h3 className="font-medium text-red-600">Введите название заметки</h3>}

        <textarea 
          className="border-2 pl-0.5" 
          placeholder="Note text..." 
          onChange={(e) => setText(e.target.value)} 
        />
      </div>
      
      <button 
        className="flex h-10 border-solid border-black border-2 hover:bg-slate-300 justify-center items-center w-32 mx-auto mt-5" 
        to="/notes/create" 
        onClick={handleCreate}>
          Create
      </button>
    </div>
  )
}
