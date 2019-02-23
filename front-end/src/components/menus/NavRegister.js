import React from 'react';
import './../../css/navbar.css';
import {Link} from 'react-router-dom';
// let search = require('../img/search.png')

export const NavRegister = () => {
    return (
        <> 
            <div  >
                <Link to='/influers/'  className='logo'>  
                        I
                </Link>

                <input type='search' name='' className='search' placeholder='Search Influers'  >
                       
                </input>
                    
            </div>
        </>
    )
} 