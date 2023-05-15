import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './component/Home';
import AddChocolate from './component/AddChocolate';
import Main from './component/Main';
import UpdateChocolate from './component/UpdateChocolate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chocolate')
      },
      {
        path: '/addChocolate',
        element: <AddChocolate></AddChocolate>
      },
      {
        path: '/updateChocolate/:id',
        element: <UpdateChocolate></UpdateChocolate>,
        loader: ({params}) => fetch(`http://localhost:5000/chocolate/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
