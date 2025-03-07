import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Navbar from "../Componentes/Navbar/Navbar";
import Home from "../Pages/Authentication/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Footer from "../Componentes/Navbar/Footer/Footer";
import Queries from "../Pages/Authentication/Queries/Queries";
import OwnQuries from "../Pages/Authentication/OwnQuries/OwnQuries";
import AddQuries from "../Pages/Authentication/AddQuries/AddQuries";
import RecentQuries from "../Pages/Authentication/RecentQuries/RecentQuries";
import OurrecentText from "../Pages/Authentication/OurrecentText/OurrecentText";
import UpdateProduct from "../Pages/Authentication/UpdateProduct/UpdateProduct";
import PrivateRoute from "../Pages/Authentication/PrivateRoute/PrivateRoute";
import QueriDetails from "../Pages/Authentication/QueriDetails/QueriDetails";
import NotFoundPAge from "../Pages/Authentication/NotFoundPAge/NotFoundPAge";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFoundPAge></NotFoundPAge>,
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
        },
        {
          path:'/OwnQures',
          element:<PrivateRoute>
            <OwnQuries></OwnQuries>
          </PrivateRoute>,
        
        },
        {
          path:'/AddQuries',
          element:<PrivateRoute>
            <AddQuries></AddQuries>
          </PrivateRoute>
        },
        {
          path:'/RecentQuries',
          element:<RecentQuries></RecentQuries>,
        },
        {
          path:'/recentText',
          element:<OurrecentText></OurrecentText>
        },
        {
          path:"/updateProduct/:id",
          element:<UpdateProduct></UpdateProduct>,
          loader: ({params})=>fetch(`https://alternative-project.vercel.app/newQueries/${params.id}`)
        },
        {
          path:"/:_id",
          element:<QueriDetails></QueriDetails>,
          loader: ()=> fetch('https://alternative-project.vercel.app/newQueries')
        },
       
      ]
    },
  ]);
  export default router;