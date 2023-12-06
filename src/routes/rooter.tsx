import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrroPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Blogs from "../pages/Blogs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "blogs", element: <Blogs /> },
    ],
  },
]);

export default router;