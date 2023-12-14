import { useState } from "react"
import { User } from "../utils/validation";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/actions";
import { selectUserError } from "../redux/user/selectors";

export default function LogIn() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [zodErrors, setZodErrors] = useState(null);

  const error = useSelector(selectUserError);

  const navigate = useNavigate();

  function handleLogIn() {
    try {
      const user = User.parse({ email, password, createdAt: Date.now() });
      setZodErrors(null);
      dispatch(fetchUser(user));
      navigate('/home');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setZodErrors(err.format());
      }
    }
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold py-3 mt-28">Log in</h1>

      <div className='flex flex-col gap-3 w-96 mx-auto'>

        <input
          className="pl-1 h-10 border-solid border-black border-2"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {zodErrors?.email && <h3 className="font-medium text-red-600">{zodErrors?.email?._errors}</h3>}


        <input 
          className="pl-1 h-10 border-solid border-black border-2" 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        {zodErrors?.password && <h3 className="font-medium text-red-600">{zodErrors?.password?._errors}</h3>}

        <button className="h-10 border-solid border-black border-2 hover:bg-slate-300" onClick={handleLogIn}>Log in</button>

        <Link className="underline" to="/">Регистрация</Link>
        {error && <h3 className="font-medium text-red-600">{error}</h3>}        
      </div>
    </div>
  )
}
