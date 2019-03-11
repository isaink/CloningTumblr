import React, { Component } from "react";
// import Board from '../board/Board';
// import postForm from "../post/postForm";
import { PostsBox } from './../../components/post/Posts';
import './../../css/board.css';

let a = require('./../../img/a.png');
let camara = require('./../../img/camara.png')

export default class Dashboard extends Component {
    state = {
        profile_pic: '',
        displayPost: false,
    };

    componentDidMount(){
        this.props.fetchPosts();
    };

    handlePostForm = (e) => { // When click to make post send this to top of the posts
        e.preventDefault();
        
        this.setState({
            displayPost: true
        })
    };

    handleClick = (e) => {
    };

    render(){
        // console.log(posts, 'POSTS')
        const { posts } = this.props;

        return (
            <>  
                <p>Welcome  Home </p>
                {/* <Board posts={posts} fetchPost={this.props.fetchPosts()} /> */}

                {/* BEFORE WAS ANOTHER COMPONENT BOARD  */}

                <div className='container'>
                        <div className="pic ">
                            {/* <Link to={`/users/${user.username}`}> */} 
                                <img url='' className='profile' alt=""/>
                            {/* </Link> */}
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

                        { this.state.displayPost ? <postForm/> : null}

                        <div className="postFeed">
                            {/* {handlePostForm} */}
                            <post>posts</post>

                            <PostsBox posts={posts} className='postsBox'/>
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