import React from 'react';

const postForm = ({ onChange }) => {
    return (
        <>  
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
        </>
    )
}
export default postForm