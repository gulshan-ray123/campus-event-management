import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import FinalLayout from './Components/FinalLayout.jsx'
import AuthPage from './Components/AuthPage.jsx'
import EventDashboard from './Components/EventDashboard.jsx'
import OrganizerDashboard from './Components/OrganiserDashboard.jsx'
import Finance from './Components/Finance.jsx';
import Scheduling from './Components/Scheduling.jsx';
import RegistrationManagement from './Components/RegistrationManagement.jsx';
import Reports from './Components/Reports.jsx';
import EventRegistration from './Components/EventRegistration.jsx'
import AdminDashboard from './Components/AdminDashboard.jsx'
import AdminLogin from './Components/AdminLogin.jsx'
import QRScanner from './Components/QRScanner.jsx'
import EventPage from './Components/EventPage.jsx'
const router= createBrowserRouter([
{
  path:"/",
  element:<FinalLayout/>,
  children:[
    {
      path:"",
      element:<Layout/>
    },
    {
      path:"/Login",
      element:<AuthPage/>
    },
    {
      path:"/SignUp",
      element:<AuthPage/>
    },
    {
      path:"/Dashboard",
      element:<EventDashboard/>
    },
    {
      path:"/OrganiserDashboard",
      element:<OrganizerDashboard/>
    },{
      path:"/Reports",
      element:<Reports/>
    },
    {
      path:"/Scheduling",
      element:<Scheduling/>
    },
    {
      path:"/RegistrationManagement",
      element:<RegistrationManagement/>
    },
    {
      path:"/finance",
      element:<Finance/>
    },
    {
      path:"/EventRegistration",
      element:<EventRegistration/>
    },{
      path:"/AdminDashboard",
      element:<AdminDashboard/>
    },
    {
      path:"/AdminLogin",
      element:<AdminLogin/>
    },
    {
      path:"/QRScanner",
      element:<QRScanner/>
    },
    {
      path:"/event/:eventID",
      element:<EventPage/>
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
<StrictMode>
  <RouterProvider router={router}/>
</StrictMode>
)
