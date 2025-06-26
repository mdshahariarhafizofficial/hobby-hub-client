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
import GroupDetails from "../Pages/GroupDetails";
import ErrorPage from "../Pages/ErrorPage";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import Overview from "../Components/Overview";
import DashboardAllGroups from "../Pages/Dashboard/DashboardAllGroups";
import DashboardMyGroups from "../Pages/Dashboard/DashboardMyGroups";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('https://hobby-hub-server-beta.vercel.app/groups'),
                Component: Home,
                hydrateFallbackElement: <Loader></Loader>
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
                loader: () => fetch('https://hobby-hub-server-beta.vercel.app/groups'),
                Component: AllGroups,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: 'create-group',
                element: <PrivateRoute><CreateGroup></CreateGroup></PrivateRoute>
            },
            {
                path: 'my-groups',
                loader: () => fetch('https://hobby-hub-server-beta.vercel.app/groups'),
                element: <PrivateRoute><MyGroups></MyGroups></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/group/:id',
                loader: ({params}) => fetch(`https://hobby-hub-server-beta.vercel.app/groups/${params.id}`),
                element: <PrivateRoute><GroupDetails></GroupDetails></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            { index: true, element: <Overview></Overview> }
            ,{
                path: 'all-groups',
                loader: () => fetch('https://hobby-hub-server-beta.vercel.app/groups'),
                Component: DashboardAllGroups,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: 'create-group',
                element: <PrivateRoute><CreateGroup></CreateGroup></PrivateRoute>
            },
            {
                path: 'my-groups',
                loader: () => fetch('https://hobby-hub-server-beta.vercel.app/groups'),
                element: <PrivateRoute><DashboardMyGroups></DashboardMyGroups></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            },
        ]
    },
    {
        path: '/*',
        Component: ErrorPage,
    }

])

export default router;