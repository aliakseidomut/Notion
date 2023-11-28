import { useContext } from "react"
import { UserContext } from "../components/UserContextProvider";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>About me</h1>
      <div>
        <div>
          <span>Email:</span>
          <span>{user.email}</span>
        </div>
        <div>
          <span>Date sign up:</span>          
          <span>{new Date(user.date).toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
