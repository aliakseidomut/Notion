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
        <header className="flex justify-between">
            <h1>Hello, {user.email}</h1>
            
            <nav>
                <NavLink className={({isActive}) => isActive ? `` : ``} to="/home" end={true}>About</NavLink>
                <NavLink className={({isActive}) => isActive ? `` : ``} to="/notes" end={true}>Notes</NavLink>
                <NavLink className={({isActive}) => isActive ? `` : ``} to="/signup" end={true}>Log out</NavLink>
            </nav>
        </header>
        
        <main>
            <Outlet />
        </main>
        
        <footer className="flex justify-between">
            <span>Created by: Alexey Domut</span>
            <span>BSU: 2023</span>
        </footer>
    </div>
    );
  }
  
  export default Layout;