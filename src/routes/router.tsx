import {createBrowserRouter, Navigate} from "react-router-dom";
import { Reg } from "../components/Registration/Registration";
import { Aut } from "../components/Authorization/Authorization";
import { Tests } from "../components/Tests/Tests";
import { Rec } from "../components/RecoveryPassword/Recovery";


export const router = createBrowserRouter([
    {
        // мои изменения
        path: '/registration',
        element: <Reg />
    },
    {
        // мои изменения
        path: '/recovery',
        element: <Rec />
    },
    {
        path: '/',
        element: <Aut />
    },
    {
        path: "/test",
        element: <Tests />,
    },
{
    path: '/*',
    element: <Navigate to='/' />
},
]);