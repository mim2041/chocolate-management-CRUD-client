import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header';
import AddChocolate from './component/AddChocolate';
import ChocolateTable from './component/ChocolateTable';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <ChocolateTable></ChocolateTable>
      },
      {
        path: '/add',
        element: <AddChocolate></AddChocolate>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
