import React from 'react';
import './../../css/navbar.css';
import {Link} from 'react-router-dom';
import { NavLeftSide } from './NavLeftSide';
import { connect } from 'react-redux'

// let logo = require('../img/INFLUERS.png')
let home = require('../../img/home2.png');
let account = require('../../img/account.png');
let follows = require('../../img/follows1.png');

const Nav = ({ user, buttons, LogOutUser }) => { // Inside account I will have links to Likes and Blog 

    console.log('NAV USER', user)

    // const handleLogOut = (e) => {
    //     e.preventDefault();
    // //    LogOutUser;
    // };
    
    return (
        <> 
            <div className='nav_LogIn'>

                <NavLeftSide /> 

                {user == null && 
                    <div className="icons_leftside"> 
                        <div className='icons' >
                            <Link to='/dashboard'  >  
                                <img className='  home' src={home} alt='' /> 
                            </Link>
                        </div>
                        
                        <div className='icons'>
                            <Link to='/follows'  >  
                                <img className=' follows' src={follows} alt='' /> 
                            </Link>
                        </div>
                        
                        <div className='icons'>
                            <Link to='/account'   >  
                                <img className=' account' src={account} alt='' /> 
                            </Link>
                        </div>
                       
                        <div className="logOut">
                            <button onClick={handleLogOut} className="logOut" > 
                            Log Out
                            </button>
                        </div>
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