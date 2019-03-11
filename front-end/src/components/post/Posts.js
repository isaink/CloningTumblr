import React from "react";
import './../../css/posts.css';


export const PostsBox = ( { posts } ) => {

    let postsUsers = posts.map((post, i) => {

        return (
            <>
                <div className='wrapper_post' key={post.i} >
                    <div className='box_url' style={{backgroundImage: `url(${post.url })`, width:'500px', height:'300px', backgroundSize: `cover`}}>
                        {post.url}
                    </div>

                    <div className='title_post'>
                        <h3> {post.title} </h3>
                    </div>
                    <div className='body_post' >
                    
                        <p>{ post.body}</p>
                    </div>
                </div>  
            </>
        )
    }) 

    return(
        <>
            {postsUsers}
        </>
    )
};