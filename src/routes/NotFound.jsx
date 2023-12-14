import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { selectUserId } from "../redux/user/selectors";

export default function NotFound() {
  const link = useSelector(selectUserId) ? "/home" : "/login";
  const linkText = useSelector(selectUserId) ? "Home" : "LogIn";

  return (
    <div className="flex flex-col">
      <h2 className="text-center">404</h2>
      <h1 className="text-center">Page not found</h1>
      <Link className="text-center underline" to={link}>{`Вернуться на страницу ${linkText}`}</Link>
    </div>
  )
}
