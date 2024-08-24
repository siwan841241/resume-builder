import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import SignInPage from './auth/SignInPage.jsx'
import Dashboard from './pages/Dashboard.jsx'


const router = createBrowserRouter ([
{
  element:<App />,
  children:[
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/dashboard',
      element: <Dashboard />
    }
  ]
},
{
  path:'auth/sign-in',
  element:<SignInPage/>
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
   
  </StrictMode>,
)
