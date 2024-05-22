import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, Layout, ProfilePage, SinglePage } from "./routes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        /*   {
          path:"/list",
          element:<ListPage/>
        }, */
        /*   {
          path:"/:id",
          element:<SinglePage/>
        }, */
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/single",
          element: <SinglePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
