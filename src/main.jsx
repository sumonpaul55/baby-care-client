import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './authProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import routers from './routers/routers.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routers}></RouterProvider>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
