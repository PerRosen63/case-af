import { createHashRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Jobs } from "./pages/Jobs";
import { Job } from "./pages/Job";


export const router = createHashRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }, 
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/job/:id",
        element: <Job></Job>,
      }

    ]
  }

]); 