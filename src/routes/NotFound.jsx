import { Link } from "react-router-dom"

export default function NotFound() {
  const link = localStorage.getItem("userId") ? "/home" : "login";
  const linkText = localStorage.getItem("userId") ? "Home" : "LogIn";

  return (
    <div className="flex flex-col">
      <h2 className="text-center">404</h2>
      <h1 className="text-center">Page not found</h1>
      <Link className="text-center underline" to={link}>{`Вернуться на страницу ${linkText}`}</Link>
    </div>
  )
}
