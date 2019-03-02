import React from 'react';
import './../../css/navbar.css';
import {Link} from 'react-router-dom';
import { NavRegister } from './NavRegister';
import { connect } from 'react-redux'

// let logo = require('../img/INFLUERS.png')
let home = require('../../img/home2.png');
let account = require('../../img/account.png');
let follows = require('../../img/follows1.png');
let followers = require('../../img/followers1.png');

const Nav = ({ user, LogOutUser }) => { // Inside account I will have links to Likes and Blog 
    console.log('NAV USER', user)
    return (
        <> 
            <div className='nav_LogIn'>

                <NavRegister /> 

                {user !== null && 
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
                }
                { !this.props.toggle ?
                    <div>
                        <button onClick={this.props.toggleForm}> 
                            Log in
                        </button>
                    </div>
                :
                    <div>
                        <button onClick={this.props.toggleForm} className="authToggleButton">
                            Sign up
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
        user: state.userAuth.user
    }
}


export default connect(mapStateToProps, null)(Nav)

// {!user ?
//     <div> 
//        <Link to='/influers/dashboard' >  
//            <img className=' home' src={home} alt='' /> 
//        </Link>
       
//        <Link to='/influers/follows' >  
//            <img className='follows' src={follows} alt='' /> 
//        </Link>

//        <Link to='/influers/followers'>
//            <img className='followers' src={followers} alt='' /> 
//        </Link>

//        <Link to='/influers/account' >  
//            <img className='icon account' src={account} alt='' /> 
//        </Link>
//    </div> 
// : 
//    <div> 
//        <button className='logout' onClick={LogOutUser} /> 
//    </div>
// }