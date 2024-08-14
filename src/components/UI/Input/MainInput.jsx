import React from "react";
import classes from './MainInput.module.css';

const MainInput = (props) => {

    // props - аттрибуты html-элемента
    // className - css-классы
    // пример обращения к классу из css-файла: массив-классов.класс
    return (
        <input className={classes.mainInput} {...props}/>
    )
}

export default MainInput;