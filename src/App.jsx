import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./app/Login/Index";
import { PrivateRoute } from "./route/Private";
import { Module1 } from "./app/module1";
import { Module2 } from "./app/module2";
import { useSelector } from "react-redux";
import Home from "./app/Home/Index";

function App() {
  const { user } = useSelector((state) => state);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user.isLoggedIn ? <Home /> : <Login />,
    },
    {
      path: "/module1",
      element: (
        <PrivateRoute module="module1">
          <Module1 />
        </PrivateRoute>
      ),
    },
    {
      path: "/module2",
      element: (
        <PrivateRoute module="module2">
          <Module2 />
        </PrivateRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
