import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Note({id, title, createdAt, onDelete}) {
    const handleClick = (e) => {
        e.preventDefault();
        onDelete(id);
    };
    
    return (
        <Link className="flex justify-between items-center p-2 bg-slate-400 hover:bg-slate-300" to={`/notes/${id}/view`}>
            <div className="flex gap-2">
                <span className="font-medium">{title}</span>
                <span>{new Date(createdAt).toLocaleString()}</span>
            </div>
            <div className="flex gap-2">
                <Link to={`/notes/${id}/edit`}><AiFillEdit className="w-5 h-5" /></Link>
                <button onClick={handleClick}><AiFillDelete className="w-5 h-5" /></button>
            </div>
        </Link>
    )
}
