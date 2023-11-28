import { useContext } from "react"
import { UserContext } from "../components/UserContextProvider";
import { Link } from "react-router-dom"

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mt-5 mb-3">About me</h1>
      <div>
        <div>
          <span className="font-medium">Email: </span>
          <span>{user.email}</span>
        </div>
        <div>
          <span className="font-medium">Date sign up: </span>          
          <span>{new Date(user.date).toLocaleString()}</span>
        </div>
        <Link className="flex h-10 border-solid border-black border-2 hover:bg-slate-300 justify-center items-center w-32 mx-auto mt-5" to="/notes">Go to notes</Link>
      </div>
    </div>
  )
}
