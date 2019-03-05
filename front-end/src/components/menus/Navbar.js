import React from 'react';
import './../../css/navbar.css';
import {Link} from 'react-router-dom';
import { NavLeftSide } from './NavLeftSide';
import { connect } from 'react-redux'

// let logo = require('../img/INFLUERS.png')
let home = require('../../img/home2.png');
let account = require('../../img/account.png');
let follows = require('../../img/follows1.png');
let followers = require('../../img/followers1.png');

const Nav = ({ user, buttons, LogOutUser }) => { // Inside account I will have links to Likes and Blog 

    console.log('NAV USER', user)
    // const handleToggleButtons = (e) => { };

    const handleLogOut = (e) => {
        e.preventDefault();
    //    LogOutUser;
    };
    
    return (
        <> 
            <div className='nav_LogIn'>

                <NavLeftSide /> 

                {user == null && 
                    <div className="icons_leftside"> 
                        <Link to='/dashboard' >  
                            <img className=' home' src={home} alt='' /> 
                        </Link>
                        
                        <Link to='/follows' >  
                            <img className='follows' src={follows} alt='' /> 
                        </Link>

                        <Link to='/followers'>
                            <img className='followers' src={followers} alt='' /> 
                        </Link>

                        <Link to='/account' >  
                            <img className='icon account' src={account} alt='' /> 
                        </Link>

                        <button onClick={handleLogOut} className="logOut"> 
                        Log Out
                        </button>
                    </div>
                }
            </div>
            <hr className='line'/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userAuth.user,
        buttons: state.toggleButtons.buttons
    }
}

export default connect(mapStateToProps, null)(Nav)