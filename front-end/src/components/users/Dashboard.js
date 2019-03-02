// import '../css/Home.css';
import React from 'react';
let text = require('./../../img/a.png');

export default class Dashboard extends React.Component {
    state = {
        posts: '',
    };

    componentDidMount(){
    };

    handleClick = (e) => {

    };

    render(){
        console.log(this.state.pic)
        return (
            <>  
            <div className='compHome'>
                <div className='profile'>

                    <img value={text} alt='' onClick='' />

                </div>

                <div className='navPost'>
                    <h1 className='text'>A</h1>
                </div>

                <div>
                    <h2>Welcome  Home </h2>
                </div>
                
            </div>
            </>
        )
    }
    
}    