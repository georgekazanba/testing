import { useState } from 'react';
import React from "react";
import MainInput from '../Input/MainInput';
import MainButton from '../Button/MainButton';


const PostForm = ({create}) => {
    // новый пост
    const [post, setPost] = useState({title:'',body:''});

    // функция создания нового поста
    const addNewEntry = (e) => {
        e.preventDefault();

        // запись прилетевших данных и айдишника
        const newPost = {
            ...post, id: Date.now()
        }

        // создание нового поста и очистка принимающих полей
        create(newPost);
        setPost({title:'',body:''});
    }

    return (
        <div className='wrap'>
            <form>
                <h2>ДОБАВИТЬ МОМЕНТ</h2>
                <MainInput
                    value={post.title}
                    type="text"
                    placeholder='Название'
                    onChange = {e => setPost({...post, title: e.target.value})}
                />
                <MainInput
                    value={post.body}
                    onChange = {e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder='Описание'
                />
                <MainButton onClick={addNewEntry}>ОТПРАВИТЬ</MainButton>
            </form>
        </div>
    );
    
}

export default PostForm;