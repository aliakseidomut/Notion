import { Link, useNavigate, useParams } from "react-router-dom"
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import Api from "../utils/api";

export default function ViewNote() {
  const { id } = useParams();
  
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  Api.getNotePromise(id)
    .then(note => {
      setTitle(note.title);
      setText(note.text)
    })

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
          {title}
        </h1>      
        <div className="flex gap-3 items-center">
          <Link to={`/notes/${id}/edit`}>
            <AiFillEdit className="w-8 h-8" />
          </Link>
          <button 
            onClick={() => {
              Api.deleteNote(id); 
              navigate('/notes')
            }}
          >
            <AiFillDelete className="w-8 h-8" />
          </button>
        </div>
      </header>
      <p className="bg-slate-400 p-3">
        {text}
      </p>
    </div>
  )
}
