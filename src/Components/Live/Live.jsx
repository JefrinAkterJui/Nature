import React from 'react'
import './Live.css'

const Live = () => {
  return (
    <>
    <div className="Jui-Live relative py-[108px]">
        <div className="Live_banner">
            <img className='z-[-34]  absolute top-0 right-0' src="/imge/a.png" alt="live" />
            <img className='z-[-34] absolute top-[500px] right-[500px] md:w-[667px]' src="/imge/b.png" alt="live" />
        </div>
        <div className="container">
            <div className="k flex justify-end ">
                <div className="Live_main bg-white rounded-[10px]">
                    <div className="Live_text bg-white">
                        <h1>Live sustainably</h1>
                        <p>As well as making changes as an individual, you can join others to bring about bigger change. Right now communities across the country are fighting climate breakdown. See what's going on in your area.</p>
                        <button>Donate now</button>
                        <img src="/imge/c.png" alt="live" />
                    </div>
                </div>
            </div>
            <div className="l mt-[59px]">
                <div className="Live_main rounded-[10px]">
                    <div className="Live_text">
                        <h1>Live sustainably</h1>
                        <p>As well as making changes as an individual, you can join others to bring about bigger change. Right now communities across the country are fighting climate breakdown. See what's going on in your area.</p>
                        <button>Donate now</button>
                        <img src="/imge/l.png" alt="live" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Live