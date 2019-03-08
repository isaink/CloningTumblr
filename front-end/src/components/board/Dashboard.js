import React, { Component } from "react";
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
        const { posts} = this.state;

        return (
            <>  
                <p>Welcome  Home </p>
                <BoardContainer posts={posts}/>
            </>
        )
    }  
}    