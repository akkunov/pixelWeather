import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {RootRoute} from "./Roots/RootRoute.jsx";


function App() {
    const routes = createBrowserRouter([{
        path:'/',
        element: <RootRoute />,
    },

    ])

  return (
    <>
        <RouterProvider router={routes} />
    </>
  )
}

export default App
