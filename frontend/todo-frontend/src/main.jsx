import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import LandingPage from './pages/LandingPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { AuthProvider } from './contexts/authContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/protected",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </AuthProvider>


);
