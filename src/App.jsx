import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from './routes/root';
import './App.css'
import ErrorPage from './routes/errorPage';
import Register from './routes/Register' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <Register />,
      },
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
