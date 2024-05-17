import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './routes/homePage/homePage';
import Layout from './routes/layout/layout'
import ProfilePage from './routes/profilePage/profilePage.tsx';
import SinglePage from './routes/SinglePage/singlePage.tsx';
import ListPage from './routes/listPage/listPage.tsx';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
       {
          path:"/list",
          element:<ListPage/>
        }, 
      /*   {
          path:"/:id",
          element:<SinglePage/>
        }, */
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        }
    
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App;