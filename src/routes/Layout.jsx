import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { UserContext } from "../components/UserContextProvider";

function Layout() {
    const { user, loading } = useContext(UserContext);
    
    if(loading){
        return <div>Loading...</div>
    }

    return (
    <div className="w-2/4 mx-auto my-0">
        <header className="flex justify-between text-lg font-medium border-b-2 border-b-black py-3">
            <h1>Hello, {user.email}</h1>
            
            <nav className="flex gap-4">
                <NavLink className={({isActive}) => isActive ? `underline` : `hover:text-slate-500`} to="/home" end={true}>About</NavLink>
                <NavLink className={({isActive}) => isActive ? `underline` : `hover:text-slate-500`} to="/notes" end={true}>Notes</NavLink>
                <NavLink className={({isActive}) => isActive ? `underline` : `hover:text-slate-500`} to="/signup" end={true}>Log out</NavLink>
            </nav>
        </header>
        
        <main>
            <Outlet />
        </main>
        
        <footer className="flex justify-between text-lg font-medium border-t-2 border-t-black py-3 mt-5">
            <span>Created by: Alexey Domut</span>
            <span>BSU: 2023</span>
        </footer>
    </div>
    );
  }
  
  export default Layout;