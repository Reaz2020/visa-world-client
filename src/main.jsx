import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Routes from './routes/Routs.jsx'
// import MainLayout from './layout/MainLayout.jsx'
import { RouterProvider } from 'react-router-dom'
import Network from './providers/Network.jsx'

createRoot(document.getElementById('root')).render(


  
  <StrictMode>

   <Network > 

       <RouterProvider router={Routes}/>

   </Network> 

  </StrictMode>,
)
