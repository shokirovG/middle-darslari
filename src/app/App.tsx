import React, {Suspense} from "react";
import {AppRouter} from "./providers/router";
import {Navbar} from "../widgets/Navbar";
import {classNames} from "../shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import { Sidebar } from "../widgets/Sidebar";
import {PageLoader} from "../widgets/PageLoader";







const App:React.FC = () => {
    const {theme   } = useTheme();

    return <div className={classNames('app', {hovered: true, red: false}, [theme])}>
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader/>}>
                <Navbar />
                <div className="content-page ">

                    <Sidebar />
                    <AppRouter />
                </div>

            </Suspense>

        </div>


    </div>;
}



export default App;