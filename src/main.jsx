import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './authProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import routers from './routers/routers.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();
AOS.init({
  duration: "2000",

});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={routers}></RouterProvider>
        </AuthProvider>
        <ToastContainer />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
