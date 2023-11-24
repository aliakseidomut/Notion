import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Notes from "./routes/Notes";
import CreateNote from "./routes/CreateNote";
import EditNote from "./routes/EditNote";
import Note from "./routes/Note";
import SignUp from "./routes/SignUp";
import LogIn from "./routes/LogIn";

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
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/notes',
        element: <Notes />
      },
      {
        path: 'notes/:id/create',
        element: <CreateNote />
      },
      {
        path: 'notes/:id/edit',
        element: <EditNote />
      },
      {
        path: 'notes/:id',
        element: <Note />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
