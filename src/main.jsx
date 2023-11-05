import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css"
import AuthProvider from './authProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import routers from './routers/routers.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={routers}></RouterProvider>
      </AuthProvider>
      <ToastContainer />
    </HelmetProvider>
  </React.StrictMode>,
)
