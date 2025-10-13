import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import AuthProvider  from './context/auth';
import { PrivateProvider } from './context/private';





import './index.css'
import App from './App.jsx'
import { PublicProvider } from './context/public';



createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <AuthProvider>
      <PublicProvider>
         <PrivateProvider>
             <App />
         </PrivateProvider>
      </PublicProvider>
   </AuthProvider>
  </BrowserRouter>

)
