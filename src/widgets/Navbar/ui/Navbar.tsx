import React from 'react';
import * as cls from './Navbar.module.scss'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cls.navbar}>
            <Link to={"/"}>
                Главная
            </Link>
            <Link to={"/about"}>
                О сайте
            </Link>
        </div>
    );
};

export default Navbar;