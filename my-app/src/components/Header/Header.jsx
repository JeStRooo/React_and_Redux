import React from 'react';
import {Link} from "react-router-dom";
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.navigation}>
                    <ul className={style.menu}>
                        <Link to="/todo">toDo</Link>
                        <Link to="/list">List</Link>
                        <Link to="/svg">SVG</Link>
                        <Link to="/redux">Redux</Link>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;