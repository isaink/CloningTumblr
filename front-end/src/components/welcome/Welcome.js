import React from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';
// import Auth from "./components/utils/Auth";
import Auth from "../utils/Auth";


import './../../css/welcome.css';
// import {NavRegister } from '../NavRegister'

export class Welcome extends React.Component  {
    state = {
        match: '',
        user: '',
        register:  '',
        email: '',
        password: '',
        username: ''
    }

    handleRegister = (e) => {
        this.setState({
            register: true
        })
    };

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };
    
    registerUser = async e => {
        e.preventDefault();
        const { username, password, email } = this.state;
    
        await axios.post("/users/new", { username, password, email });

        Auth.authenticateUser(username);
    
        await axios.post("/users/login", { username, password });
    
        await this.props.checkAuthenticateStatus();
    
        this.setState({
          username: "",
          password: ""
        });
    };

    loginUser = e => {
        e.preventDefault();
        const { username, password } = this.state;
    
        axios
          .post("/users/login", { username, password })
          .then(() => {
            Auth.authenticateUser(username);
          })
          .then(() => {
            this.props.checkAuthenticateStatus();
          })
          .then(() => {
            this.setState({
              username: "",
              password: ""
            });
          });
    };

    renderForm = () => {
        switch(this.state.register){
            case false :
                    return (
                        <>
                            <form onSubmit={this.loginUser}> 
                                <input name='email' placeholder='Email' />
                                <button type='submit'>Next</button>
                            </form>
                        </>
                    )
            case true:
                    return (
                        <>
                            <form className='form_register' onSubmit={this.registerUser}>
                                <input className='' name='email' placeholder='Email' type="text" value={this.state.email} onChange={this.handleChange}/> 
                                <input className='' name='password' placeholder='Password' type="text" value={this.state.password} onChange={this.handleChange}/>
                                <input className='' name='username' placeholder='Username' type="text" value={this.state.username} onChange={this.handleChange}/> 
                                <button type='submit'>Sign Up</button>
                            </form>
                        </> 
                    )
            default : 
                return (
                    <>  
                        <div className='button_welcome'>
                            <button type='submit' className='start' onClick={this.handleRegister}>
                                    Get Started
                            </button >
        
                            <button type='submit' className='log_in' >
                                    Log In
                            </button>
                        </div>
                    </>
            )            
        }

    };

    componentDidMount(){
        // this.props.fetchRandomPost(); 
        this.props.fetchRandomPost()

        console.log(this.props)   
    };

   render(){
    
    console.log(this.props, 'this is the props')

    return (
        <>  
        <div className='compWelcome' style={{backgroundImage: `url("${this.state.img}")`}}>
            
            <div className='welcome_saludo'>
                <h2>Influers </h2>
                <p>Come for what you love.
                <br /> Stay for what you discover.</p>  

                {this.renderForm()}

            </div>

        </div>

        </>
    )
   }

}    