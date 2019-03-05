import React from 'react';
let username = './db/'

const postForm = ({ onChange }) => {
    return (
        <>  
            <img className='' /> {/*  pic user*/}
            <div className='boxText'>
                <p>userName</p>
                <h1> Título </h1>
                <form>
                    <input type='text' onChange={onChange} placeholder='Title'/>
                    <input type='text' onChange={onChange} placeholder='Your text here'/>
                    
                    <button> Close </button>
                    <button> Post </button>
                </form>
            </div>
        </>
    )
}
export default postNav