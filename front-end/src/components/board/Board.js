import React, { Component } from "react";
import PostNav from './../post/postNav';
import './../../css/board.css';

export default class Board extends Component {
    
    render(){
        console.log('BOARD PROPS', this.props)
        return (
            <>
                <div className='container'>
                        <div className="pic ">
                            {/* <img src={ profile_pic } alt=""/> */}
                        </div>

                        {/* <div className="posts_profiles ">
                            <p>profiles</p>
                        </div> */}

                        <div className="nav">
                                <PostNav />
                        </div>

                        <div className="postFeed">
                            <post>posts</post>
                      
                        </div>

                        <widgets> widgets </widgets>
                   
                    <div className="content_creator">
                        {/* <div className='a'> </div>*/}
                    </div> 
                </div>
            </>
        )
    }
}