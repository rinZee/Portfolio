import React from 'react';
import './Form.css';
export  const Form = () => {
    return (
        <div className='form'>
            <h1>Contact Me</h1>

            <form className='myForm'>
                <div className='input'>

                    <label>Name</label>
                    <input type='text' className='text' placeholder='Enter your first name'/>
                    
                    <label>Email</label>
                    <input type='text' className='text' placeholder='Enter your Email'/>
                    
                     <label>Message</label>
                  <textarea type='text' className='message' placeholder='Enter your message'/>
                </div>

                <div className='submit'>
                    <button type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    )
}

