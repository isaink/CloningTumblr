import React, { Component } from "react";
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm'
import './../../css/welcome.css';

class Welcome extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        startUp: '',    // toggleForms switch statement
        img: '',        // for the background
    };

    handleSignUp = (e) => {
      this.setState({
        startUp: true
      })
    };

    handleLogIn = (e) => {
        this.setState({
          startUp: false
      })
    };

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value 
      })
    };

    handleLogginUser = async (e) => {
      e.preventDefault();
      let { email, password } = this.state;
  
      await this.props.logInUser({ email, password });
      await this.props.checkAuthenticateStatus(); 
    }

    handleLogOutUser = () => {
      this.props.LogOutUser();
    }

    handleSubmission = async (event) => {
      event.preventDefault();
      let { username, password,  email} = this.state;

      // CALL REDUX ACTION AFTER
      await this.props.newUser({ username, password, email });
      await this.props.logInUser({ username, password }); // this state have to macth with the backend router
      await this.props.checkAuthenticateStatus();
    }; 

    renderForm = () => {
      switch(this.state.startUp){
        case false :
          return (
            <>
              <LogInForm 
                startUp={this.startUp}
                loginUser={this.loginUser}
                email={this.state.email}
                password={this.state.password}
                handleChange={this.handleChange}
                handleLogginUser={ this.handleLogginUser}
              />
            </>
        )
        case true:
        return (
            <>
               <SignUpForm 
                startUp={this.startUp}
                email={this.state.email}
                password={this.state.password} 
                username={this.state.username} 
                handleChange={this.handleChange} 
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

                <button type='submit' className='log_in' onClick={this.handleLogIn}>
                  Log In
                </button>
              </div>
          </>
        ) 
      }
    };

    componentDidMount(){
        this.props.fetchRandomBG();
        this.props.checkAuthenticateStatus();
    };

   render(){
    
    console.log(this.props, 'PROPS from Welcome Component')

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