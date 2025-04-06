import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link, Navigate, RouteObject, Outlet,
} from 'react-router-dom';
import App from '../App';
import {Error404} from '../components/pages/Error404';
import {Adidas} from '../components/pages/Adidas';
import {Puma} from '../components/pages/Puma';
import {Abibas} from '../components/pages/Abibas';
import {Prices} from '../components/pages/Prices';
import {Model} from '../components/pages/Model';
import {ProtectedPage} from '../components/pages/ProtectedPage';
import {ProtectedRoute} from './ProtectedRoute';
import {LoginPage} from '../components/pages/LoginPage';


const PATH = {
    adidas: '/adidas',
    puma: '/puma',
    abibas: '/abibas',
    prices: '/prices',
    model: '/:model/:id',
    protected: '/protected',
    error: '/error',
    login: '/login'
} as const

const publicRoutes: RouteObject[] = [
    {
        path: PATH.adidas,
        element: <Adidas/>,

    },
    {
        path: PATH.puma,
        element: <Puma/>,
    },
    {
        path: PATH.abibas,
        element: <Abibas/>,
    },
    {
        path: PATH.prices,
        element: <Prices/>,
    },
    {
        path: PATH.model,
        element: <Model/>,
    },

    {
        path: PATH.error,
        element: <Error404/>,
    },
    {
        path: PATH.login,
        element: <LoginPage/>,
    },


]
const privateRoutes: RouteObject[] = [
    {
        path: PATH.protected,
        element: <ProtectedPage/>,
    },
]

export const PrivateRoute = () => {
    const isAuth = true

    return (

        <div>
            {isAuth ? <Outlet/> : <Navigate to={'/login'}/>}
        </div>
    );
};
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Navigate to={PATH.error}/>,
        children: [
            {
                element: <PrivateRoute/>,
                children: privateRoutes
            },

            ...publicRoutes,

        ],

    },

]);


//----------------------------------------------------------


// import * as React from 'react';
// import {createRoot} from 'react-dom/client';
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//     Link, Navigate,
// } from 'react-router-dom';
// import App from '../App';
// import {Error404} from '../components/pages/Error404';
// import {Adidas} from '../components/pages/Adidas';
// import {Puma} from '../components/pages/Puma';
// import {Abibas} from '../components/pages/Abibas';
// import {Prices} from '../components/pages/Prices';
// import {Model} from '../components/pages/Model';
// import {ProtectedPage} from '../components/pages/ProtectedPage';
// import {ProtectedRoute} from './ProtectedRoute';
// import {LoginPage} from '../components/pages/LoginPage';
//
//
// const PATH = {
//     adidas: '/adidas',
//     puma: '/puma',
//     abibas: '/abibas',
//     prices: '/prices',
//     model: '/:model/:id',
//     protected: '/protected',
//     error: '/error',
//     login: '/login'
// } as const
//
//
// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App/>,
//         errorElement: <Navigate to={PATH.error}/>,
//         children: [
//             {
//                 path: PATH.adidas,
//                 element: <Adidas/>,
//
//             },
//             {
//                 path: PATH.puma,
//                 element: <Puma/>,
//             },
//             {
//                 path: PATH.abibas,
//                 element: <Abibas/>,
//             },
//             {
//                 path: PATH.prices,
//                 element: <Prices/>,
//             },
//             {
//                 path: PATH.model,
//                 element: <Model/>,
//             },
//             {
//                 path: PATH.protected,
//                 element: (
//                     <ProtectedRoute>
//                         <ProtectedPage/>
//                     </ProtectedRoute>
//                 ),
//             },
//             {
//                 path: PATH.error,
//                 element: <Error404/>,
//             },
//             {
//                 path: PATH.login,
//                 element: <LoginPage/>,
//             },
//
//         ],
//
//     },
//
// ]);