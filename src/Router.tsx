import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const Router = () => {
  const Provider = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div>404 Not Found</div>, //to change
    },
  ]);
  return <RouterProvider router={Provider} />;
};
export default Router;
