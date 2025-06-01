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
import JournalIndex from './pages/Journal/Index.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';



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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
