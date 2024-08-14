import React, { useContext } from 'react';
import "./Navbar.module.css";
import { KIWAMIGREEN } from '../../../context';
import Link from '../Link/Link';

const Navbar = () => {
    const {isGreen, setIsGreen} = useContext(KIWAMIGREEN);
    return (

        <nav className={isGreen ? "KIWAMIGREEN" : ''}>
            <Link href="/">Index</Link>
            /
            <Link href="about">About</Link>
            /
            <Link href="posts">Posts</Link>
        </nav>
    );
};

export default Navbar;