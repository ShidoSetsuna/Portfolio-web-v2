import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/home/home.jsx";
import ErrorPage from "./pages/error/error.jsx";
import Layout from "./layout/layout.jsx";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
