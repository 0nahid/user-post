import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/post">Post</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    );
};

export default Header;