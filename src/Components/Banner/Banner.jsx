import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <>
    <div className="Jui-Banner pb-[124px]">
        <div className="Bannerimg right-0 absolute">
            <img src="/imge/banner1.png" alt="banner" />
        </div>
        <div className="container">
            <div className="main_menu pt-[64px]">
                <div className="main_text flex gap-[95px]">
                    <div className="Banner_text">
                        <h1>Think positive about our Climate</h1>
                        <hr className='w-[453px] mt-[19px]' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget maecenas eget sit et rhoncus. Sit consectetur.
                        </p>
                        <div className="mail">
                            <input type="email" placeholder='name@company.com' />
                            <button>Sign up</button>
                        </div>
                    </div>
                    <div className="banner_img">
                        <img src="/imge/banner2.png" alt="banner" />
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Banner