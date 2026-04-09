//TEST UCHUN YARATILDI! 


import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";

const BugButton = () => {
    const {t} = useTranslation();
    const [error, setError] = useState(false)
    const onThrow =()=> setError(true);

    useEffect(()=> {
        if(error) throw new Error();
    }, [error])
    return (
        <div>
                    <button onClick={onThrow}>
                        {t('Тестовый ошибка')}
                    </button>
        </div>
    );
};

export default BugButton;