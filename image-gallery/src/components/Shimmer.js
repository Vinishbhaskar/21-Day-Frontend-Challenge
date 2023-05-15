import React from 'react'
import './shimmer.css'

function Shimmer() {
  return (
    <div className='image-shimmer'>
    {Array(15).fill("")
        .map((e,index)=>(<div key={index} className='shimmer-card'></div>))
    }
    </div>
  )
}

export default Shimmer