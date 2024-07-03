import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import ErrorPage from './pages/Error'

/* Configuration des routes pour le router. */
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'logement/:id', element: <Logement /> },
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
