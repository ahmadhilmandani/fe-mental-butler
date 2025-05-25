import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import LoginIndex from './pages/Login/Index.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import DashboardIndex from './pages/Dashboard/Index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginIndex />,
  },
  {
    path: "/dashboard",
    Component: MainLayout ,
    children: [
      { index: true, Component: DashboardIndex },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
