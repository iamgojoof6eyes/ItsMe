import { AboutMe, Achivements, Blog, BlogPost, Home, Landing, NotFound, Projects, ReachMe, WhoWatching } from '@/Pages'
import store from '@/store/store.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import CheckWatching from './components/CheckWatching.jsx'


const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Landing />
        },
        {
          path: "home",
          element: <CheckWatching><Home /></CheckWatching>
        },
        {
          path: "introduction",
          element: <CheckWatching><AboutMe /></CheckWatching>
        },
        {
          path: "awards",
          element: <CheckWatching><Achivements /></CheckWatching>
        },
        {
          path: "documentary",
          element: <CheckWatching><Blog /></CheckWatching>
        },
        {
          path: "documentary/:slug",
          element: <CheckWatching><BlogPost /></CheckWatching>
        },
        {
          path: "originals",
          element: <CheckWatching><Projects /></CheckWatching>
        },
        {
          path: "contact",
          element: <CheckWatching><ReachMe /></CheckWatching>
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
)
