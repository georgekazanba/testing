import React, { useContext, useEffect } from 'react';
import Counter from '../components/counter';
import karlik from '../assets/karlik.webp';
import { KIWAMIGREEN } from '../context';

const Index = () => {
    const {isGreen, setIsGreen} = useContext(KIWAMIGREEN);
    useEffect(() => {
        document.title = 'Эльдар Джарахов, пошёл нахуй';
      }, []);
    return (
        <>
            <h1>Эльдар Джарахов</h1>
            <h2>ПОШЁЛ НАХУЙ</h2>
            <div className={`dzharakhov ${isGreen ? "KIWAMIGREENIMG" : ""}`}>
                <img src={karlik} alt="карлан" />
            </div>
            {/* счётчик */}
            <Counter/>
        </>
    );
};

export default Index;