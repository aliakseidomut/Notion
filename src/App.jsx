import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Notes from "./routes/Notes";
import CreateNote from "./routes/CreateNote";
import EditNote from "./routes/EditNote";
import SignUp from "./routes/SignUp";
import LogIn from "./routes/LogIn";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./routes/NotFound";
import ViewNote from "./routes/ViewNote";

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
        element: <ViewNote />
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
    <RouterProvider router={router} />
  )
}

export default App;
