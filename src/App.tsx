import React from 'react';
import {PageOne} from './components/pages/PageOne';
import {PageTwo} from './components/pages/PageTwo';
import {PageThree} from './components/pages/PageThree';
import {Error404} from './components/pages/Error404';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {S} from './components/pages/_styles'



const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
    ERROR:'/error404'
}as const


function App() {

    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>

                    {/*<div><NavLink className={({isActive}) => isActive ? s.activeNavLink : s.navLink}*/}
                    {/*              to={'/page1'}>page1</NavLink></div>*/}
                    {/*<div><NavLink className={({isActive}) => isActive ? s.activeNavLink : s.navLink}*/}
                    {/*              to={'/page2'}>page2</NavLink></div>*/}
                    {/*<div><NavLink className={({isActive}) => isActive ? s.activeNavLink : s.navLink}*/}
                    {/*              to={'/page3'}>page3</NavLink></div>*/}


                    <S.NavWrapper><NavLink to={PATH.PAGE1}>page1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>page2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>page3</NavLink></S.NavWrapper>

                </S.Nav>
                <S.Content>
                    <Routes>
                        <Route path="/" element={<Navigate to="/page1"/>}/>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>
                        <Route path="*" element={<Error404/>}/>
                    </Routes>

                    {/*<Error404/>*/}
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}


export default App;