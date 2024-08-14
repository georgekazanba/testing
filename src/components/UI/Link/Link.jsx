import React, { useContext } from 'react';
import { KIWAMIGREEN } from '../../../context';

const Link = ({children, ...props}) => {

    return (
        <a {...props}>
            {children}
        </a>
    );
};

export default Link;