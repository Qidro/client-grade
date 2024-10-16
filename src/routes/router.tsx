import {createBrowserRouter, Navigate} from "react-router-dom";
import { Reg } from "../components/Registration/Registration";
import { Aut } from "../components/Authorization/Authorization";
import { Home } from "../components/HomePage/HomePage";
import { Rec } from "../components/RecoveryPassword/Recovery";
import PrivateRoute from "../components/PRoute/PrivateRoute";
import UnPrivateRoute from "../components/PRoute/UnprivateRoute";
import {  CreateTestt } from "../components/CreateTest/CreateTest";
import { Users } from "../components/Users/Users";



export const router = createBrowserRouter([
    {
        // мои изменения
        path: '/registration',
        element: <UnPrivateRoute><Reg /></UnPrivateRoute>
    },
    {
        // мои изменения
        path: '/recovery',
        element:  <UnPrivateRoute><Rec /> </UnPrivateRoute>
    },
    {
        path: '/',
        element: <UnPrivateRoute><Aut /></UnPrivateRoute>
        // element: <Aut />
    },
    {
        path: "/home",
        element: <PrivateRoute><Home /></PrivateRoute> //,
        // children: [
        //     {
        //         path: 'create',
        //         element: <CreateTestt />
        //     }
        // ]
    },
    {
        path: "/create",
        element: <PrivateRoute><CreateTestt /></PrivateRoute>
    },
    {
        path: "/users",
        element: <Users />
    },
{
    path: '/*',
    element: <Navigate to='/' />
},
]);