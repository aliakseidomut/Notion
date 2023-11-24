import { useState } from "react"
import { User } from "../utils/validation";
import Api from "../utils/api";
import { z } from "zod";
import { Link } from "react-router-dom"

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [errors, setErrors] = useState(null);
  const [isPasswordsEquals, setIsPasswordsEquals] = useState(true);

  

  function handleSignUp() {
    if(Api.isUserExist(email)){
      console.log(Api.isUserExist(email))
    } else {
      console.log("Net")
    }

    try {
      const user = User.parse({email, password, date: Date.now()});
      


      if (password !== repeatPassword) {
        setIsPasswordsEquals(false);
        throw new Error("");
      }
      
      Api.createUser(user);
      
      setIsPasswordsEquals(true);
      setErrors(null);
    } catch(err) {
      if (err instanceof z.ZodError) {
        setErrors(err.format());
      } else {
        setErrors(err);
      }
    }
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold py-3 mt-28">Sign up</h1>
      
      <form action="#" className='flex flex-col gap-3 w-96 mx-auto'>
        
        <input 
          className="pl-1 h-10 border-solid border-black border-2" 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && <h3>Введите правильный email</h3>}
        
        <input 
          className="pl-1 h-10 border-solid border-black border-2" 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors?.password && <h3>Введите правильный пароль</h3>}
        
        <input 
          className="pl-1 h-10 border-solid border-black border-2" 
          type="password" placeholder="Repeat password" 
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        {!isPasswordsEquals && <h3>Пароли отличаются</h3>}
        
        <button className="h-10 border-solid border-black border-2 hover:bg-slate-300" onClick={handleSignUp}>Sign up</button>
  
        <Link className="underline" to="/login">Уже есть аккаунт?</Link>        
      </form>
    </div>
  )
}