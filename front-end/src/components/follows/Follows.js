import React, { Component } from "react";
import './../../css/follows.css';

let following = require('./../../img/following.png');
let followers = require('./../../img/followers.png');

export default class Follows extends Component {
    render(){
        return(
            <>
                <div className='box_follows'>
                    <div className='section'>
                        <h4> Following  </h4>
                        <img className='following' src={following} alt=''/>
                    </div>

                    <div className='section' >
                        <h4> Followers </h4>
                        <img className='followers' src={followers} alt=''/>
                    </div>
                </div>
            </>
        )
    }
};