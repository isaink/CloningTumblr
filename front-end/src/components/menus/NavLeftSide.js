import React, { Component } from "react";
import './../../css/navbar.css';
import {Link} from 'react-router-dom';

// let search = require('../img/search.png')

export class NavLeftSide extends Component {
    state = {
        search: "",
      };

    handleStyle = (e) => { // search input charges to white ":active" for writing.
        // const styling_SearchBar = {
        // style={{backgroundImage: white;}}
        //     background_color: 'white',
        // }
        // return styling_SearchBar;
    };

    handleChange = e => {
        this.setState({
            search: e.target.value
        })
    };

    render() {
        const {search} = this.state;
        return (
            <> 
                <div>
                    <Link to='/influers/'  className='logo'>   I     </Link>
                    
                        <input 
                            type='search' 
                            name='search' 
                            value={search}
                            className='search' 
                            placeholder='Search Influers' 
                            onClick={this.handleStyle}
                            onChange={this.handleChange}
                        />   
                </div>   
            </>
        )
    }
} 