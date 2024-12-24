import React, { useRef } from "react";
import './Help.css'
import { FaArrowRight } from "react-icons/fa6";
// -------slider-----------
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Help = () => {
    // ------------Slider function----------
    let sliderRef = useRef(null);
  
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    };

  return (
    <>
    <div className="Jui-help bg-[#F3F7F5] py-[55px]">
        <div className="container">
            <div className="Help_text pl-20">
                <h1>How to help</h1>
                <p>Our goal is a world of net zero carbon emissions by 2050, with greater prosperity for all.</p>
            </div>
        </div>
        <div className="slider-container ">
            <Slider ref={slider => (sliderRef = slider)} {...settings} >
                <div>
                    <div className="Slider overflow-hidden mt-[75px]">
                        <div className="main_slider  ">
                            <div className="slider_text">
                                <h2>Title</h2>
                                <div className='hihi'></div>
                                <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                                <div className="arrow ">
                                    <FaArrowRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Slider mt-[75px]">
                        <div className="main_slider m1">
                            <div className="slider_text">
                                <h2>Title</h2>
                                <div className='hihi'></div>
                                <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                                <div className="arrow ">
                                    <FaArrowRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Slider overflow-hidden mt-[75px]">
                        <div className="main_slider overflow-hidden m2">
                            <div className="slider_text">
                                <h2>Title</h2>
                                <div className='hihi'></div>
                                <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                                <div className="arrow ">
                                    <FaArrowRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Slider mt-[75px]">
                        <div className="main_slider m3">
                            <div className="slider_text">
                                <h2>Title</h2>
                                <div className='hihi'></div>
                                <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                                <div className="arrow ">
                                    <FaArrowRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Slider mt-[75px]">
                        <div className="main_slider ">
                            <div className="slider_text">
                                <h2>Title</h2>
                                <div className='hihi'></div>
                                <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                                <div className="arrow ">
                                    <FaArrowRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="Slider mt-[75px]">
                        <div className="main_slider m1">
                            <div className="slider_text">
                                <h2>Title</h2>
                                <div className='hihi'></div>
                                <p>We focus on systems with the highest emissions and where our networks have the greatest opportunity to drive change.</p>
                                <div className="arrow ">
                                    <FaArrowRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
    </>
  )
}

export default Help