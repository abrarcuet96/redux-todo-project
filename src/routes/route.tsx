import App from "@/App";
import Home from "@/pages/home";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import Tasks from "@/pages/tasks";
import { createBrowserRouter } from "react-router-dom";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);
export default routes;
