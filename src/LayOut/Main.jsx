

import { Outlet } from "react-router-dom";
import Navbar from "../Componentes/Navbar/Navbar";
import Footer from "../Componentes/Navbar/Footer/Footer";

const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-364px)]' >
              <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;