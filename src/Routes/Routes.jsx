import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllGroups from "../Pages/AllGroups";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import CreateGroup from "../Pages/CreateGroup";
import MyGroups from "../Pages/MyGroups";
import Loader from "../Pages/Loader";

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
            },{
                path: 'all-groups',
                loader: () => fetch('http://localhost:8000/groups'),
                Component: AllGroups,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: 'create-group',
                element: <PrivateRoute><CreateGroup></CreateGroup></PrivateRoute>
            },
            {
                path: 'my-groups',
                loader: () => fetch('http://localhost:8000/groups'),
                element: <PrivateRoute><MyGroups></MyGroups></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            },
        ]
    },
    {
        path: '/*',
        element: <p>404 Page</p>
    }

])

export default router;