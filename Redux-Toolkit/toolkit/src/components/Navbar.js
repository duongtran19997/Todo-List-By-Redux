import React from 'react';

function Navbar(props) {
    return (
        <div className='navbar'>
            <h1>My Redux App Todo</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total Todos:3</li>
            </ul>
        </div>
    );
}

export default Navbar;