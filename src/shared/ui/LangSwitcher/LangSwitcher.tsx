import React from 'react';
import {Button} from "../Button/Button";
import {useTranslation} from "react-i18next";

const LangSwitcher = () => {
    const {t, i18n} = useTranslation();


    const toggle =async()=> {
       await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }
    return (

        <div>
            <Button onClick={toggle}>
                {
                    t("Перевод")

                }
            </Button>
            {
                t("Привет")
            }
        </div>
    )

};

export default LangSwitcher;