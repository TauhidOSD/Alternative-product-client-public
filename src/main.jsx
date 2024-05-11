import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='px-4 md:px-12'>
    <AuthProvider >
    <RouterProvider router={router} />
    <Toaster></Toaster>
    </AuthProvider>
    </div>
  </React.StrictMode>,
)
