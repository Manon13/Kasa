import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import ErrorBoundary from './components/Error/ErrorBoundary';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'logement/:id', element: <Logement /> },
      { path: '*', element: <ErrorBoundary /> },
    ],
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(routes);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);