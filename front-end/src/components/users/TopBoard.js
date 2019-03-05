import React, { Component } from "react";
import './../../css/user.css';
let a = require('./../../img/a.png');

export default class TopBoard extends Component {
    render(){
        return (
            <>
                <div className=" ">

                    <div className="pic sectionAvatar">
                        {/* <img src={ profile_pic } alt=""/> */}
                    </div>

                    <div className="content_creator">
                        <div className='a'>
                            <img  src={a} alt='' /> 
                        </div>
                    </div>

                </div>
            </>
        )
    }
}