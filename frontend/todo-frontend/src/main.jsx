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
import TopicView from './components/TopicView.jsx';
import ListTodos from './components/ListTodos.jsx';
import { DataContextProvider } from './contexts/dataContext.jsx';

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
      },
      {
        path: "/main/detailed",
        element: <TopicView />,
        children: [
          {
            path: ":topic",
            element: <ListTodos />
          }
        ]
      },
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <DataContextProvider>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </DataContextProvider>
  </AuthProvider>
);
