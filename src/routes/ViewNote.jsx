import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes } from "../redux/notes/selectors";
import { deleteNote } from "../redux/notes/actions";

export default function ViewNote() {
  const { id } = useParams();
  
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const notes = useSelector(selectNotes);
  const note = notes.filter(note => note.id === +id)[0];

  if (!note) {
    return <Navigate to="*" replace />
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
          {note.title}
        </h1>      
        <div className="flex gap-3 items-center">
          <Link to={`/notes/${id}/edit`}>
            <AiFillEdit className="w-8 h-8" />
          </Link>
          <button 
            onClick={() => {
              dispatch(deleteNote(id)); 
              navigate('/notes')
            }}
          >
            <AiFillDelete className="w-8 h-8" />
          </button>
        </div>
      </header>
      <p className="bg-slate-400 p-3">
        {note.text}
      </p>
    </div>
  )
}
