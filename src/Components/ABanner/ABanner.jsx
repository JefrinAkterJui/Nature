import React from 'react'
import './ABanner.css'


const ABanner = () => {
  return (
    <>
        <div className="Jui-About-banner relative ">
            <div className="banner_imge  ">
                <img className=' absolute ' src="/imge/About.png" alt="about bg" />
            </div>
            <div className="container">
                <div className="Main_banners flex justify-between ">
                    <div className="banner_text">
                        <h1>Our story</h1>
                        <p>We're an international non-profit founded in 2003, with offices in London, New York, New Delhi, Amsterdam and Beijing. <br />

                        <br />
                        In that time, we’ve grown our network to include over 500 multinational businesses in 175 markets worldwide. The Under2 Coalition, for which we are the Secretariat, is made up of over 260                       governments globally, representing 1.75 billion people and 50% of the global economy.</p>
                        <button>Join the cause</button>
                    </div>
                    <div className="Banner_imges mt-[67px]">
                        <img src="/imge/vew.png" alt="banner imge" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ABanner