import React, { useRef } from "react";
import './ASlider.css'
// --------------slider--------
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ASlider = () => {
    // --------------slider function---------
        let sliderRef = useRef(null);
      
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 4.5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
        };

  return (
    <>
        <div className="container">
            <div className="mt-[70px]">

                <div className="slider-container">
                    <Slider ref={slider => (sliderRef = slider)} {...settings}>
                        <div>
                            <div className="slider  mt-[60px]">
                                <div className="main_A_slider ">
                                    <div className="A_s_text flex justify-center  items-center flex-col ">
                                        <h2>3,456</h2>
                                        <p>Tree’s planted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider  mt-[60px]">
                                <div className="main_A_slider AS1">
                                    <div className="A_s_text flex justify-center  items-center flex-col ">
                                        <h2>3,456</h2>
                                        <p>Tree’s planted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider  mt-[60px]">
                                <div className="main_A_slider AS3">
                                    <div className="A_s_text flex justify-center  items-center flex-col ">
                                        <h2>3,456</h2>
                                        <p>Tree’s planted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider  mt-[60px]">
                                <div className="main_A_slider AS1">
                                    <div className="A_s_text flex justify-center  items-center flex-col ">
                                        <h2>3,456</h2>
                                        <p>Tree’s planted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider  mt-[60px]">
                                <div className="main_A_slider AS2">
                                    <div className="A_s_text flex justify-center  items-center flex-col ">
                                        <h2>3,456</h2>
                                        <p>Tree’s planted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="slider  mt-[60px]">
                                <div className="main_A_slider ">
                                    <div className="A_s_text flex justify-center  items-center flex-col ">
                                        <h2>3,456</h2>
                                        <p>Tree’s planted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default ASlider