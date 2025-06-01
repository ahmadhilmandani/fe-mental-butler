import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import LoginIndex from './pages/Login/Index.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import DashboardIndex from './pages/Dashboard/Index.jsx';
import JournalIndex from './pages/Journal/Index.jsx';



const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginIndex />,
  },
  {
    path: "/dashboard",
    Component: MainLayout,
    children: [
      { index: true, Component: DashboardIndex },
    ],
  },
  {
    path: "/journal",
    Component: MainLayout,
    children: [
      { index: true, Component: JournalIndex }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
