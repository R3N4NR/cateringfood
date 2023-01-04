import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './components/homePage/home';
import { Login } from './components/loginPage/login';
import { MenuPage } from './components/menuPage/menu';

const App = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<MenuPage />} />
            </Routes>
        </Fragment>
    );
};
export default App;
