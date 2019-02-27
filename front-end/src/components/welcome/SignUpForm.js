import React from 'react';
import './../../css/welcome.css';

export default class SignUpForm extends React.Component {
    state = {
        email: '',
        password: '',
        username: ''
    };

    render(){
        return (
            <>
                <div className='welcome_saludo'>
                    <h2>Influers </h2>
                    <p>Come for what you love.
                    <br /> Stay for what you discover.</p>  
                </div>

                <form className='form_register' onSubmit={this.registerUser} >
                    <input className='' name='email' placeholder='Email' type="text" value={this.state.email} onChange={this.handleChange}/>                        
                    <input className='' name='password' placeholder='Password' type="text" value={this.state.password} onChange={this.handleChange}/>
                    <input className='' name='username' placeholder='Username' type="text" value={this.state.username} onChange={this.handleChange}/> 
                    <button type='submit'>Sign Up</button>
                </form>
            </>
        )
    }
};