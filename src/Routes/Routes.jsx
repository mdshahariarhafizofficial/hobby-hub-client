import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path: '/*',
        element: <p>404 Page</p>
    }

])

export default router;