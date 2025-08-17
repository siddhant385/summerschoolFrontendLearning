import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import AuthProvider  from './context/auth';
import PublicProvider from './context/public';



import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <AuthProvider>
   <PublicProvider>
    <App />
   </PublicProvider>
   </AuthProvider>
  </BrowserRouter>

)
