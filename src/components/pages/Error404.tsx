import React from 'react';
import {useLocation} from 'react-router-dom';

export const Error404 = () => {
    const location = useLocation()
    return (
        <div>
            <h1>Ошибка 404</h1>
            <p>Страница <code>{location.pathname}</code> не найдена.</p>
        </div>
    );
};

