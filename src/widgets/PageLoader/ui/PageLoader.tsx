import React from 'react';
import * as cls from './PageLoader.module.scss'
import Loader from "../../../shared/ui/Loader/Loader";
import {classNames} from "../../../shared/lib/classNames/classNames";

const PageLoader:React.FC = () => {
    return (
        <div className={classNames(cls.pageLoader, {}, [])}>
                <Loader/>
        </div>
    );
};
export default PageLoader;
