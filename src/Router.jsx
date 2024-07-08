import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Housing from './pages/Housing/Housing'
import ErrorPage from './pages/Error/Error'

/* Configuration des routes pour le router. */
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'housing/:id', element: <Housing /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]

/* Création du router et rendu de l'application. */
const root = ReactDOM.createRoot(document.getElementById('root'))

/* Création du BrowserRouter avec les routes configurées. */
const router = createBrowserRouter(routes)

/* Rendu de l'application React avec StrictMode et RouterProvider */
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
