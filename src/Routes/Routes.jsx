import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Navbar from "../Componentes/Navbar/Navbar";
import Home from "../Pages/Authentication/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Footer from "../Componentes/Navbar/Footer/Footer";
import Queries from "../Pages/Authentication/Queries/Queries";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
           path:'/Navbar',
           element:<Navbar></Navbar>
        },
        {
          index:true,
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Register></Register>
        },
        {
          path:'/Footer',
          element:<Footer></Footer>
        },
        {
          path:'/Queries',
          element:<Queries></Queries>
        }
      ]
    },
  ]);
  export default router;