import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import AddUser from './components/AddUser'
import Layout from './components/Layout'
import UpdateUser from './components/UpdateUser'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: ()=> fetch('http://localhost:5000/users')
      },
      {
        path: '/add-user',
        element: <AddUser/>
      },
      {
        path: '/update-user/:id',
        element: <UpdateUser/>,
        loader: ({params})=> fetch(`http://localhost:5000/user/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
