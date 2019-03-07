import React from 'react';
import './../../css/postForm.css';

const postForm = ({ onChange }) => {
    return (
        <>  
            <div className='container'>
                <img alt='' className='' /> {/*  pic user*/}
                <div className='boxText'>
                    <p>userName</p>
                    <h1> Título </h1>
                    <form>
                        <input type='text' onChange={onChange} placeholder='Title'/>
                        <input type='text' onChange={onChange} placeholder='Your text here'/>
                        
                        <button type='close' > Close </button>
                        <button type='submit' > Post </button>
                    </form>
                </div>
            </div>
            
        </>
    )
}
export default postForm