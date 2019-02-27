import React from 'react';
import './../../css/welcome.css';

export default class LogInForm extends React.Component {

    render(){
        return (
            <>
                <form onSubmit={this.props.loginUser}> 
                    <input name='email' value={this.props.email} placeholder='Email' onChange={this.props.handleChange} />
                    <input name='password' value={this.props.password} placeholder='Password' onChange={this.props.handleChange} />
                    
                    <button type='submit'>Log In</button>
                </form>

            </>
        )
    }
};

