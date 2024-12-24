import React from 'react'
import './Plant.css'

const Plant = () => {
  return (
    <>
    <div className="Jui-Plant relative pt-[60px]">
        <div className="Plant-banner">
            <img className='absolute z-[-34] left-0 md:top-[200px]' src="/imge/pBanner.png" alt="Plant" />
        </div>
        <div className="container">

            <div className="main_plant bg-white    md:w-[679px]  ">
                <div className="plant_text  ">
                    <h1>Plant a tree</h1>
                    <p>We’ve compiled a list of effective ways to reduce your environmental footprint. The biggest game changers are labelled "top tips".</p>
                    <button className='hum cursor-pointer'>Find Out</button>
                    <img src="/imge/Pimg.png" alt="plant" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Plant