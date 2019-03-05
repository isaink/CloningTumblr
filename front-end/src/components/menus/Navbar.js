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

const Nav = ({ user, buttons, }) => { // Inside account I will have links to Likes and Blog 

    console.log('NAV USER', user)
    // const handleToggleButtons = (e) => { };

    const handleLogOut = async (e) => {
        e.preventDefault();
        await this.props.LogOutUser();
    };
    
    return (
        <> 
            <div className='nav_LogIn'>

                <NavLeftSide /> 

                {user == null && 
                    <div className="icons_leftside"> 
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

                        <button onSubmit={handleLogOut} className="logOut"> 
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