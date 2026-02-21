import React, {useMemo, useState, FC} from 'react';
import {ThemeContext} from "./ThemeContext";
import {Theme} from "./ThemeContext";

interface ThemeProviderProps {
    children: React.ReactNode;
}
const defaultTheme = localStorage.getItem("theme") as Theme | Theme.LIGHT;
const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps =useMemo(()=> ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;