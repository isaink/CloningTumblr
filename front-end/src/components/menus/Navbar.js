import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { NavLeftSide } from './NavLeftSide';
import './../../css/navbar.css';

// let logo = require('../img/INFLUERS.png')
let home = require('../../img/home2.png');
let account = require('../../img/account.png');
let follows = require('../../img/follows1.png');

class Nav extends Component {

    handleLogOutUser =  () => {
        this.props.logOutUser();
    };

    render(){
        console.log('NAV USER', this.props.user)
        const {isLoggedIn } = this.props;

        return (
            <> 
                <div className='nav_LogIn'>
    
                    <NavLeftSide /> 
    
                    {isLoggedIn ? 
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
                           
                            <button onClick={this.handleLogOutUser} className="logOut" > 
                                LogOut
                            </button>

                        </div>
                    :
                    null
                    }
                </div>
                <hr className='line'/>
            </>
        )
    }
}

export default Nav;