import React from 'react'
import './newslatter.css'
const newslatter = () => {
  return (
    <div className='newslatter'>
        <h1> Get Exclusive ofeers on your Email </h1>
        <p>Subscreibe to our newsletter and stay Updated</p>
        <div>
            <input type="Email" placeholder='your Email id' />
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default newslatter