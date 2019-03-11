import React from 'react';
import './../../css/posts.css';

const postForm = ({ onChange }) => { //overflow absolute  z-index
    // let userName = user.map( el => {  });

    return (
        <>  
            <div className='containerForm '>

                {/* <img alt='' className='' src={user.pic_profile}/>  */}
                
                <div className='boxText'>
                    <p>userName</p>
                    <form>
                        <input type='text' onChange={onChange} placeholder='Title'/>
                        <input type='text' onChange={onChange} placeholder='Your text here'/>
                        
                        <button onClick='' type='close' > Close </button>
                        <button onClick='' type='submit' > Post </button>
                    </form>
                </div>
            </div>
            
        </>
    )
}
export default postForm