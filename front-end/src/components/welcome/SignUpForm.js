import React from 'react';
import './../../css/welcome.css';

export default class SignUpForm extends React.Component {

    render(){
        console.log('SIGNUP PROPS',this.props)

        const { handleChange, handleSubmission, email, password, username } = this.props
        
        return (
            <>
                <form className='form_register' onSubmit={handleSubmission} >
                    <input className='' 
                        name='email' 
                        placeholder='Email' 
                        type="text" 
                        value={email} 
                        onChange={handleChange}
                    />                        
                    <input className='' 
                        name='password' 
                        placeholder='Password' 
                        type="text" 
                        value={password} 
                        onChange={handleChange}
                    />
                    <input className='' 
                        name='username'
                        placeholder='Username' 
                        type="text"
                        value={username} 
                        onChange={handleChange}
                    /> 
                    
                    <button type='submit' onSubmit={handleSubmission} >Sign Up</button>
                </form>

            </>
        )
    }
};