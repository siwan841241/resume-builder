import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import SignInPage from './auth/SignInPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import {ClerkProvider} from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter ([
{
  element:<App />,
  children:[
    // {
    //   path:'/',
    //   element:<Home />
    // },
    {
      path:'/dashboard',
      element: <Dashboard />
    }
  ]
},
{
    path:'/',
    element:<Home />
  },
{
  path:'/auth/sign-in',
  element:<SignInPage/>
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
