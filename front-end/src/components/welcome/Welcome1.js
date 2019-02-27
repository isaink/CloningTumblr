import React from 'react';
// import axios from 'axios';
// import Auth from "../utils/Auth";

import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm'
import './../../css/welcome.css';

class Welcome extends React.Component  {
    state = {
        // match: '',
        isLoggedin: false,
        startUp: '',
        user: '',
        img: '',
    };

    handleSignUp = (e) => {
        this.setState({
            startUp: true
        })
    };


    // registerUser = async e => {
    //     e.preventDefault();
    //     const { username, password, email } = this.state;
    
    //     await axios.post("/users/new", { username, password, email });

    //     Auth.authenticateUser(username);
    
    //     await axios.post("/users/login", { username, password });
    
    //     await this.props.checkAuthenticateStatus();
    
    //     this.setState({
    //       username: "",
    //       password: ""
    //     });
    // };

    // loginUser = e => {
    //     e.preventDefault();
    //     const { username, password } = this.state;
    
    //     axios
    //       .post("/users/login", { username, password })
    //       .then(() => {
    //         Auth.authenticateUser(username);
    //       })
    //       .then(() => {
    //         this.props.checkAuthenticateStatus();
    //       })
    //       .then(() => {
    //         this.setState({
    //           username: "",
    //           password: ""
    //         });
    //       });
    // };

    renderForm = () => {
      switch(this.state.startUp){
        case false :
          return (
            <>
              <LogInForm loginUser={this.loginUser} handleChange={this.handleChange} />
            </>
        )
        case true:
        return (
            <>
               <SignUpForm registerUser={this.registerUser} email={this.email} password={this.password} username={this.username} handleChange={this.handleChange} />
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
        this.props.fetchRandomBG()
        // this.props.checkAuthenticateStatus()
    };

   render(){
    
    console.log(this.props, 'this is the props')

    return (
        <>  
        <div className='compWelcome' style={{backgroundImage: `url(${this.props.img})`}}>
            
            <div className='welcome_saludo'>
                <h2>Influers </h2>
                <p>Come for what you love.
                <br /> Stay for what you discover.</p>  
            </div>

            {this.renderForm()}
        </div>
      </>
    )
  }
}    

export default Welcome;