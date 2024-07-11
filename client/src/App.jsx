import HomePage from "./routes/homePage/homePage.jsx";
import { Layout, RequireAuth } from "./routes/layout/layout.jsx";
import ListPage from "./routes/listPage/listPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/singlePage/singlePage.jsx";
import LoginPage from "./routes/loginPage/loginPage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";
import Register from "./routes/register/register.jsx";
import ProfileUpdate from "./routes/profileUpdate/profileUpdate.jsx";
import NewPostPage from "./routes/newPostPage/newPostPage.jsx";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders.js";

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
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />,
        },
        {
          path: "/add-post",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
