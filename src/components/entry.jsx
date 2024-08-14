import React, { useContext, useEffect, useState } from "react";
import MainButton from "./UI/Button/MainButton";
import { useNavigate } from "react-router-dom";
import { KIWAMIGREEN } from "../context";

const Entry = (props) => {
    // Navigate - объект для навигации по ссылкам
    const navigate = useNavigate();

    const {isGreen, setIsGreen} = useContext(KIWAMIGREEN);

    // props - аттрибуты
    return (
        <div className={`wrap ${isGreen ? "KIWAMIGREEN" : ''}`}>
            <div className="wrap-content">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <MainButton onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MainButton>
            <MainButton onClick={() => props.remove(props.post)}>Удалить</MainButton>
        </div>
    );
}

export default Entry;