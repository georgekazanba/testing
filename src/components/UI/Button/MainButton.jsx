import React, { useContext } from "react";
import { KIWAMIGREEN } from "../../../context";

const MainButton = ({children, ...props}) => {
    const {isGreen, setIsGreen} = useContext(KIWAMIGREEN);
    // props - аттрибуты html-элемента
    // children - внутреннее содержание элемента
    return (
        <button {...props} className={`${isGreen ? "KIWAMIGREENBG" : ''}`}>{children}</button>
    )
}

export default MainButton;