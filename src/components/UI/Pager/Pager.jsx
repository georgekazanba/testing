import React from 'react';
import cl from './Pager.module.css';
import MainButton from '../Button/MainButton';
import { getPagesArray } from '../../utils/Pages/Pages';

const Pager = ({totalPages, changePage}) => {
    const pagesArray = getPagesArray(totalPages);
    return (
        <div className={cl.pager}>
            {pagesArray.map(p => <MainButton key={p} onClick={() => changePage(p)}>{p}</MainButton>)}
        </div>
    );
};

export default Pager;