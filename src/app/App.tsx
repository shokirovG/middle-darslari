import React, {Suspense} from "react";

import AboutPage from "../pages/AboutPage/AboutPage";
import MainPage from "../pages/MainPage/MainPage";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import AppRouter from "./providers/router/ui/AppRouter";
import {Navbar} from "../widgets/Navbar";
import {classNames} from "../shared/lib/classNames/classNames";

const App:React.FC = () => {
    return <div className={classNames('app', {hovered: true, red: false}, ['light', 'cls2'])}>
        <h1>App</h1>
        <Navbar/>
        <AppRouter/>


    </div>;
}



export default App;