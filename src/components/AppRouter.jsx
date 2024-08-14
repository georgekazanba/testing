import React, { useContext, useState } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from '../pages/About'
import Index from '../pages/Index'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default AppRouter;