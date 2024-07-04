import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import DaftarMember from './pages/DaftarMember.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children: [
    //   {
    //     path: 'login',
    //     element: <Login />
    //   }
    // ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'dashboard',
    element: <Dashboard/>,
  },
  {
    path: 'daftarmember',
    element: <DaftarMember />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
