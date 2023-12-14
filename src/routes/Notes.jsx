import { Link, Navigate, useNavigate } from "react-router-dom"
import Note from "../components/Note";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../redux/user/selectors";
import { selectNotes, selectNotesLoading } from "../redux/notes/selectors";
import { fetchNotes } from "../redux/notes/actions";
import { useEffect } from "react";

export default function Notes() {
  const dispatch = useDispatch();
  
  const authorId = useSelector(selectUserId);

  useEffect(() => {
    dispatch(fetchNotes(authorId));
  }, [dispatch]);

  const notes = useSelector(selectNotes);
  const loading = useSelector(selectNotesLoading);

  if (!notes) {
    return <Navigate to="/login" replace />
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>  
      <h1 className="text-center text-2xl font-semibold mt-5 mb-3">Notes</h1>
      <Link className="flex h-10 border-solid border-black border-2 hover:bg-slate-300 justify-center items-center w-32 mx-auto mt-5" to="/notes/create">Add new note</Link>
      <div className="flex flex-col m-5 gap-2">
        {notes.map((el) => <Note key={el.id} note={el} />)}
      </div>
    </div>  
  )
}