import React from 'react';
import cl from './ErrorHandler.module.css';

const ErrorHandler = ({children}) => {
    return (
        <mark className={cl.errorHandler}>{children}</mark>
    );
};

export default ErrorHandler;