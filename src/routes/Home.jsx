import { Link } from "react-router-dom"
import { selectUser } from "../redux/user/selectors";
import { connect } from "react-redux";

function Home({user}) {
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
          <span>{new Date(user.createdAt).toLocaleString()}</span>
        </div>
        <Link className="flex h-10 border-solid border-black border-2 hover:bg-slate-300 justify-center items-center w-32 mx-auto mt-5" to="/notes">Go to notes</Link>
      </div>
    </div>
  )
}

const propsState = state => ({user: selectUser(state)})
export default connect(propsState, null)(Home)