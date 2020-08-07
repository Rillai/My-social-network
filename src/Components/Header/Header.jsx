import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className='Header'>
        <img src='https://netology.ru/backend/uploads/page_assets/images/file/397/github.png' />
        <div className='loginBlock'>
            {props.isAuth ? props.login
            :<NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header;