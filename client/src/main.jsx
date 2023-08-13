import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import App from './App.jsx'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/Profile'
import MyGames from './pages/MyGames';
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
      },
      {
        path: 'myGames/',
        element: <MyGames />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
