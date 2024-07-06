import React from 'react'
import xing1 from "../assets/xing1.jpg"
import xing2 from "../assets/xing2.jpg"
import xing3 from "../assets/xing3.jpg"
import "./xing.css" 

export default function xing() {
  return (
    <div className='xing'>
        <div className='container-grid'>

            <div className='grid-item'>
                <img src={xing1} alt="" />
            </div>

            <div className='grid-item'>
                <img src={xing2} alt="" />
            </div>

            <div className='grid-item'>
                <img src={xing3} alt="" />
            </div>

        </div>
    </div>
  )
}
