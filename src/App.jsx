import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Notes from "./routes/Notes";
import CreateNote from "./routes/CreateNote";
import EditNote from "./routes/EditNote";
import Note from "./routes/ViewNote";
import SignUp from "./routes/SignUp";
import LogIn from "./routes/LogIn";
import UserContextProvider from "./components/UserContextProvider";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <LogIn />
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: '/home',
        element: (
          <Home />
        )
      },
      {
        path: '/notes',
        element: <Notes />
      },
      {
        path: '/notes/create',
        element: <CreateNote />
      },
      {
        path: '/notes/:id/edit',
        element: <EditNote />
      },
      {
        path: '/notes/:id/view',
        element: <Note />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return(
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  ) 
}

export default App;
