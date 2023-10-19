import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import SearchContainer from './components/SearchContainer'
import MainContainer from './components/MainContainer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WatchPage from './components/WatchPage'

const root = ReactDOM.createRoot(document.getElementById('root'))

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='text-center text-2xl font-bold'>Page not found!!!!!</h1>,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
      {
        path: 'results',
        element: <SearchContainer />,
      },
    ],
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)
