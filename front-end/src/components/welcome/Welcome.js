import React from 'react';
// import axios from 'axios';
// import Auth from "../utils/Auth";

import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm'
import './../../css/welcome.css';

class Welcome extends React.Component  {
    state = {
        username: '',
        password: '',
        email: '',
        startUp: '',    // toggle switch statement
        img: '',        // for the background
    };

    handleSignUp = (e) => {
        this.setState({
            startUp: true
        })
    };

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value 
      })
    };

    handleSubmission = async (event) => {
      event.preventDefault();
      let { username, password,  email} = this.state;

      // CALL REDUX ACTION AFTER
      await this.props.newUser({ username, password, email });
      await this.props.logInUser({ username, password }); // this state have to macth with the backend router
    }; 

    // registerUser = async e => {
    //     e.preventDefault();
    //     const { username, password, email } = this.state;
    
    //     await axios.post("/new", { username, password, email });

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
      console.log('WELCOME PROPS',this.props)
      switch(this.state.startUp){
        case false :
          return (
            <>
              <LogInForm 
                loginUser={this.loginUser}
                email={this.state.email}
                password={this.state.email}
                handleChange={this.handleChange}
                handleSubmission={this.handleSubmission}
                startUp={this.startUp}
              />
            </>
        )
        case true:
        return (
            <>
               <SignUpForm 
                email={this.state.email}
                password={this.state.password} 
                username={this.state.username} 
                handleChange={this.handleChange} 
                startUp={this.startUp}
                handleSubmission={this.handleSubmission }
              />
            </> 
        )
        default : 
          return (
            <>  
              <div className='button_welcome'>
                <button type='submit' className='start' onClick={this.handleSignUp}>
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
};    

export default Welcome;