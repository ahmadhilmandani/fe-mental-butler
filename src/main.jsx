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
import { Bounce, ToastContainer } from 'react-toastify';
import RegisterIndex from './pages/Register/Index.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginIndex />,
  },
  {
    path: '/register',
    Component: RegisterIndex
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
