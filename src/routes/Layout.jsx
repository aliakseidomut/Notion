import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (
    <div className=''>
        <header>
            <NavLink className={({isActive}) => isActive ? `` : ``} to="/home" end={true}>About</NavLink>
            <NavLink className={({isActive}) => isActive ? `` : ``} to="/notes" end={true}>Notes</NavLink>
            <NavLink className={({isActive}) => isActive ? `` : ``} to="/signup" end={true}>Log out</NavLink>
        </header>
        
        <main>
            <Outlet />
        </main>
        
        <footer>
            <span>Created by: Alexey Domut</span>
            <span>BSU: 2023</span>
        </footer>
    </div>
    );
  }
  
  export default Layout;