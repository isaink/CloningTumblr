import React, { Component } from "react";
import PostForm from './postForm';
import './../../css/posts.css';

let a = require('./../../img/a.png');
let camara = require('./../../img/camara.png')

export default class PostNav extends Component {
    render(){
        return(
          <>
                <div className="content_creator">
                  <div >
                    <a href='' className='bgButton'>
                        <img  className="camara" alt='' src={camara}/>
                    </a>

                    <a href=''>
                    <img className="a" alt='' src={a}/>
                    </a>
                  </div>
                </div>
          </>
        )
    }
        

};