import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Register from "./Register";
import Login from "./Login";

const Router = () => {
  const Provider = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div>404 Not Found</div>, //to change
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={Provider} />;
};
export default Router;
