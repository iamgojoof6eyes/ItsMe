import { AboutMe, Achivements, Blog, Home, Projects, ReachMe, WhoWatching } from '@/Pages'
import store from '@/store/store.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'


const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <WhoWatching />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "introduction",
          element: <AboutMe />
        },
        {
          path: "awards",
          element: <Achivements />
        },
        {
          path: "documentary",
          element: <Blog />
        },
        {
          path: "originals",
          element: <Projects />
        },
        {
          path: "contact",
          element: <ReachMe />
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
