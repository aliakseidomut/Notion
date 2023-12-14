import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteNote } from '../redux/notes/actions';

export default function Note({note}) {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(deleteNote(note.id, note.authorId));    
    };

    return (
        <Link className="flex justify-between items-center p-2 bg-slate-400 hover:bg-slate-300" to={`/notes/${note.id}/view`}>
            <div className="flex gap-2">
                <span className="font-medium">{note.title}</span>
                <span>{new Date(note.createdAt).toLocaleString()}</span>
            </div>
            <div className="flex gap-2">
                <Link to={`/notes/${note.id}/edit`}><AiFillEdit className="w-5 h-5" /></Link>
                <button onClick={handleClick}><AiFillDelete className="w-5 h-5" /></button>
            </div>
        </Link>
    )
}
