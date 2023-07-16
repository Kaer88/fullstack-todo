import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import LandingPage from './pages/LandingPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { AuthProvider } from './contexts/authContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashboard from './pages/UserDashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/main",
    element: <App />,
    children: [
      {
        path: "/main",
        element: <UserDashboard />,
        children: [
          {
            path: "/main/:topic",
            element: <UserDashboard />
          },

        ]
      },
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </AuthProvider>
);
