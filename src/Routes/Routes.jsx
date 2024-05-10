import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Navbar from "../Componentes/Navbar/Navbar";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
           path:'/Navbar',
           element:<Navbar></Navbar>
        }
      ]
    },
  ]);
  export default router;