// import '../css/Home.css';
import React from 'react';
import axios from 'axios';
import { } from './post/postCreator'
let text = require('./../img/a.png');

export default class Home extends React.Component {
    state = {
        pic: '',
    };

    getPic = () => {
        axios.get('http://localhost:3000/influers/dashboard')
        .then((res) => {
            console.log(res)
            this.setState({
                // img: res.data.body.body 
            })
        })
    };

    componentDidMount(){
        this.getPic()
    };

    handleClick = (e) => {

    };
    
    render(){
        console.log(this.state.pic)
        return (
            <>  
            <div className='compHome'>
                <div className='profile'>

                    <img value={text} alt='' onClick='' />
                 </div>
                <div className='navPost'>
                    <h1 className='text'>A</h1>
                </div>
                <div>
                    <h2>Welcome  Home </h2>
                </div>
            </div>
    
            </>
        )
    }
    
}    