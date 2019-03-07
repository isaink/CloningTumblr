import React, { Component } from "react";
import Board from './Board';
import BoardContainer from '../../Redux_Containers/BoardContainer';
import './../../css/board.css';

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
        // console.log(this.state.pic)
        const { posts, profile_pic } = this.state;

        return (
            <>  
                <p>Welcome  Home </p>
                <BoardContainer posts={posts}/>
            </>
        )
    }  
}    