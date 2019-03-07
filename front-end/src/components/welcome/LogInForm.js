import React from 'react';
import './../../css/welcome.css';

export default class LogInForm extends React.Component {

    render(){
        const {handleLogginUser, email, password, handleChange  } = this.props;
        return (
            <>
                <form onSubmit={handleLogginUser }> 

                    <input name='email' value={email} placeholder='Email' onChange={handleChange} />
                    <input name='password' value={password} placeholder='Password' onChange={handleChange} />
                    
                    <button type='submit'>Log In</button>
                </form>

            </>
        )
    }
};

