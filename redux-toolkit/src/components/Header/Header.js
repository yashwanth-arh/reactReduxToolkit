import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import user from "../../images/user.png";
import Footer from '../Footer/Footer';
import "./Header.scss"

const Header = () => {
    return (
        <>
        <div className='header'>
            <Link to={'/'}>
            <div className='logo'>
               Movie App 
            </div>
           </Link>  
            
            <div className='user-image'>
                <img src={user} alt="user"/>
            </div>
        </div>
        <div className='container'>
        <Outlet />
        </div>
        <Footer />
        </>
    );
};

export default Header;