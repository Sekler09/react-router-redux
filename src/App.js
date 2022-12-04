import {createHashRouter, RouterProvider} from 'react-router-dom'
import Layout from './routes/Layout'
import User from './routes/User'
import Users from './routes/Users'
import NotFound from './routes/NotFound'
import UserNotFound from './routes/UserNotFound'
import AlbumNotFound from './routes/AlbumNotFound'
import Hello from './routes/Hello'
import Albums from './routes/Albums'
import Album from './routes/Album'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Hello />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <User />,
        errorElement: <UserNotFound />,
      },
      {
        path: '/albums',
        element: <Albums />,
      },
      {
        path: '/albums/:id',
        element: <Album />,
        errorElement: <AlbumNotFound />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
