import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
// import Root from "./routes/Root";
// import ErrorPage from "./pages/Error/index";
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Root />,
    // errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Card />
    <RouterProvider router={router} />
  </React.StrictMode>
);
