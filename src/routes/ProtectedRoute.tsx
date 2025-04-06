// @flow
import * as React from 'react';
import {ReactNode} from 'react';
import {Error404} from '../components/pages/Error404';
import {Navigate} from 'react-router-dom';

type Props = {
    children: ReactNode;
};
export const ProtectedRoute = ({children}: Props) => {
    const permit = false

    return (

        <div>
            {permit ? children : <Navigate to={'/login'}/>}
        </div>
    );
};