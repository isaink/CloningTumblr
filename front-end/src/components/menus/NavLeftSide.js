import React, { Component } from "react";
import './../../css/navbar.css';
import {Link} from 'react-router-dom';

let searchbutton = require('./../../img/search.png')
let logo = require('./../../img/symbol.png')

export class NavLeftSide extends Component {
    state = {
        search: "",
      };

    handleChange = e => {
        this.setState({
            search: e.target.value
        })
    };

    render() {
        const { search } = this.state;
        return (
            <> 
                <div className='containerNav'>
                    <Link to='/'> 
                        <img  className='logo' alt='' src={logo} />  
                    </Link>
                    
                        <img className='buttonSearch' alt='' src={searchbutton}/>
                   
                        <input 
                        
                            type='search' 
                            name='search' 
                            value={search}
                            className='search search_bar' 
                            placeholder='Search Influers' 
                            onClick={this.handleStyle}
                            onChange={this.handleChange}
                        />   
                </div>   
            </>
        )
    }
} 