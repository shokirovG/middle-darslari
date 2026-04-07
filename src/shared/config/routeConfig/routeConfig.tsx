import { RouteProps} from "react-router-dom";
import {MainPageAsync} from "../../../pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../../../pages/AboutPage/AboutPage.async";
import NotFound from "../../../pages/NotFound/NotFound";


export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NOT_FOUND = "not_found",

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '/*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
        [AppRoutes.MAIN]: {
            path: RoutePath.main,
            element: <MainPageAsync/>
        },
        [AppRoutes.ABOUT]: {
            path: RoutePath.about,
            element: <AboutPageAsync/>
        },
        [AppRoutes.NOT_FOUND]: {
            path: RoutePath.not_found,
            element: <NotFound/>
        }
}
