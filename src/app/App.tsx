import React, {Suspense, useContext, useState} from "react";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widgets/Navbar";
import {classNames} from "../shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";

const App:React.FC = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={classNames('app', {hovered: true, red: false}, [theme])}>
        <h1>App</h1>
        <button onClick={toggleTheme}>Toggle</button>
        <Navbar/>
        <AppRouter/>


    </div>;
}



export default App;