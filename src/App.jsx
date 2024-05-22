import React from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Skills from './pages/Skills.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About-me.jsx';
import E404 from './pages/e404.jsx';
import Root from './pages/Root.jsx';
import Grimoire from './pages/mon-vieux-grimoire.jsx';
import Location from './pages/location.jsx';

const routes = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'projects',
                children: [
                    {
                        path: 'mon-vieux-grimoire',
                        element: <Grimoire />
                    },
                    {
                        path: 'location',
                        element: <Location />
                    },
                ],
            },
            {
                path: 'skills',
                element: <Skills />,
            },
            {
                path: 'about-me',
                element: <About />,
            },
            {
                path: 'e404',
                element: <E404 />,
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to="/e404" />
    }
];

const router = createBrowserRouter(routes);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
