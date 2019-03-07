import React, { Component } from "react";
// import PostForm from './../post/postForm';
import './../../css/board.css';

let a = require('./../../img/a.png');
let camara = require('./../../img/camara.png')

export default class Board extends Component {

    // handlePostForm = (e) => { // When click to make post send this to top of the posts
    //     return (
    //         <>
    //              <PostForm />
    //         <>
    //     )
        
    // };

    handleChangePostForm = () => {

    };

    render(){
        console.log('BOARD PROPS', this.props)
        return (
            <>
                <div className='container'>
                        <div className="pic ">
                            <img url='' className='profile' alt=""/>
                        </div>

                        <div className="nav">
                            <div className='postCreator'>
                                <div className='iconPost'>
                                    <img className="a" alt='' src={a}/> 
                                </div>
                              
                                <div className='iconPost'>
                                    <img  className="camara " alt="" src={camara}/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="postFeed">
                            {/* {handlePostForm} */}
                            <post>posts</post>
                        </div>

                        <div className='widgets'> 
                            widgets 
                        </div>
                   
                    {/* <div className="content_creator">
                    </div>  */}
                </div>
            </>
        )
    }
}