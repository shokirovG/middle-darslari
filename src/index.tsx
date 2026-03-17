import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.scss";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./app/providers/ThemeProvider";
import "./shared/config/i18n/i18n";
const rootElement = document.getElementById("root");
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>

        </ThemeProvider>


    );
}
