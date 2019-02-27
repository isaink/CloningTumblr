import React from 'react';
import './../../css/navbar.css';
import {Link} from 'react-router-dom';
import { NavRegister } from './NavRegister';

// let logo = require('../img/INFLUERS.png')
let home = require('../../img/home2.png');
let account = require('../../img/account.png');
let follows = require('../../img/follows1.png');
let followers = require('../../img/followers1.png');

export const Nav = () => { // Inside account I will have links to Likes and Blog 
    return (
        <> 
            <div className='nav_LogIn'>

                <NavRegister />

                <div> 
                    <Link to='/influers/dashboard' >  
                        <img className=' home' src={home} alt='' /> 
                    </Link>
                    
                    <Link to='/influers/follows' >  
                        <img className='follows' src={follows} alt='' /> 
                    </Link>

                    <Link to='/influers/followers'>
                        <img className='followers' src={followers} alt='' /> 
                    </Link>

                    <Link to='/influers/account' >  
                        <img className='icon account' src={account} alt='' /> 
                    </Link>

                </div>
            </div>
            <hr className='line'/>
        </>
    )
}

