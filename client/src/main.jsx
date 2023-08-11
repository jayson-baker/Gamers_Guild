import React from 'react';
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
=======
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
>>>>>>> de6e2f536d9aba7dc0e11b629ef4aa54ff4bf64d

import App from './App.jsx'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/Profile'
import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'profile/:id',
        element: <ProfilePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
