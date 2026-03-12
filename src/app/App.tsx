import React, {Suspense, useContext, useState} from "react";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widgets/Navbar";
import {classNames} from "../shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import { Sidebar } from "../widgets/Sidebar";

const App:React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={classNames('app', {hovered: true, red: false}, [theme])}>
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>


    </div>;
}



export default App;