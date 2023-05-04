import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import  { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
 
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">SignUp</Link>
                {
                    user && <button onClick={handleLogOut} className="btn btn-xs m-3">Log-Out</button>
                }
            </div>
            <h2>{user && <p className='text-white'>{user.display}</p>}</h2>
        </nav>
    );
};

export default Header;