import React from 'react';
import classes from './Modal.module.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.modal];
    if (visible){
        rootClasses.push(classes.active);
    }

    // при нажатии на фон модалки она закрывается
    // stopPropagation предотвращает закрытие модалки при нажатии на блок с самой модалкой
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;