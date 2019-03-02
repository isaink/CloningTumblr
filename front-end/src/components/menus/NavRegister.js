import React, { Component } from "react";
import './../../css/navbar.css';
import {Link} from 'react-router-dom';
import { searchActive }  from './searchActivity';

// let search = require('../img/search.png')

export class NavRegister extends Component {

    handleStyle = (e) => { // search input charges to white ":active" for writing.
        let style = searchActive;
        e.style()
    };

    render() {
        return (
            <> 
                <div>
                    <Link to='/influers/'  className='logo'>   I     </Link>
                    
                    <input 
                        type='search' 
                        name='' 
                        className='search' 
                        placeholder='Search Influers' 
                        onClick={this.handleStyle} 
                    />   
                </div>

                
            </>
        )
    }
} 