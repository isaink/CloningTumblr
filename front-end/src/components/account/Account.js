import React, { Component } from "react";
import './../../css/account.css';
let likes = require('./../../img/likes.png');
let following = require('./../../img/followers.png');
let post = require('./../../img/posts.ico');

export default class Account extends Component {
    render(){
        return(
            <>
                <div className='box_account'>
                    <div className='section'>
                        <h4>  Likes </h4>
                        <img className='likes' src={likes} alt=''/>
                    </div>

                    <div className='section' >
                        <h4> Post </h4>
                        <img  className='post' src={post} alt=''/>
                    </div>
                </div>
            </>
        )
    }
};