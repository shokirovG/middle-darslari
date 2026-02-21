import {useContext, useMemo} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface useThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}
const UseTheme = (): useThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme =()=> {
        const newTheme = theme === "dark" ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        toggleTheme
    }
};

export default UseTheme;