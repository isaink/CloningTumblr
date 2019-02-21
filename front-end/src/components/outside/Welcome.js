import '../../css/welcome.css';
import React from 'react';
import axios from 'axios';
// import {NavRegister } from '../NavRegister'

export class Welcome extends React.Component  {
    state = {
        img: ''
    }

    fetchRandomPost = () => {
        axios.get('http://localhost:3000/influers/welcome')
        .then((res) => {
            console.log(res)
            this.setState({
                img: res.data.body.body 
            })
        })
    };

    componentDidMount(){
        this.fetchRandomPost();
    };

   render(){
       console.log(this.state.img)
    return (
        <>  
        <div className='compWelcome' style={{backgroundImage: `url("${this.state.img}")`}}>
            
            <div className='welcome_saludo'>
                <h2>Influers </h2>
                <p>Come for what you love.
                <br /> Stay for what you discover.</p>  

                    <button type='submit' className='start' >
                        Get Started
                    </button>
                    <br />
                    <button type='submit' className='log_in' >
                        Log In
                    </button>


            </div>

        </div>

        </>
    )
   }

}    