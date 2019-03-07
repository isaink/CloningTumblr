import React, { Component } from "react";
import './../../css/navbar.css';
import {Link} from 'react-router-dom';
import { NavLeftSide } from './NavLeftSide';

// let logo = require('../img/INFLUERS.png')
let home = require('../../img/home2.png');
let account = require('../../img/account.png');
let follows = require('../../img/follows1.png');

export class Nav extends Component {

    handleLogOutUser = () => {
        this.props.LogOutUser();
    };

    render(){
        console.log('NAV USER', this.props.user)
        const { user } = this.props;

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
                                <button onClick={this.handleLogOutUser} className="logOut" > 
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
}