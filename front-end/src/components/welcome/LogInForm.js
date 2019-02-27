import React from 'react';
import './../../css/welcome.css';

export default class LogInForm extends React.Component {
    state = {
        email: '',
        password: '',
    };
    
    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };
    
    render(){
        return (
            <>
                <form onSubmit={this.props.loginUser}> 
                    <input name='email' placeholder='Email' onChange={this.props.handleChange} />
                    <input name='password' placeholder='Password' />
                    <button type='submit'>Log In</button>
                </form>
            </>
        )
    }
};

