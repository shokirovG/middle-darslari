import React, {Suspense} from "react";

import AboutPage from "../pages/AboutPage/AboutPage";
import MainPage from "../pages/MainPage/MainPage";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import AppRouter from "./providers/router/ui/AppRouter";
import {Navbar} from "../widgets/Navbar";

const App:React.FC = () => {
    return <div>
        <h1>App</h1>
        <Navbar/>
        <AppRouter/>


    </div>;
}



export default App;