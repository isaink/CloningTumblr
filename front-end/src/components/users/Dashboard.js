
import React, { Component } from "react";
import RighSide from './RightSide';
import LeftSide from './LeftSide';
import './../../css/user.css';

export default class Dashboard extends Component {
    state = {
        posts: '',
        profile_pic: '',
    };

    componentDidMount(){
    };

    handleClick = (e) => {
    };

    render(){
        console.log(this.state.pic)
        return (
            <>  
                <div className='container'>
                    <LeftSide />    
                    <RighSide profile_pic="profile_pic"/> 

                    <div>
                        <h2>Welcome  Home </h2>
                    </div>
                    
                </div>
            </>
        )
    }  
}    