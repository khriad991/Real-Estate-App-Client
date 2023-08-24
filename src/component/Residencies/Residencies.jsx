import React from 'react';
import './Residencies.css'
import {Swiper,SwiperSlide,useSwiper} from "swiper/react";
import "swiper/css"
import Data from "../../utils/slider.json"
import {sliderSettings} from "../../utils/commom.js";
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";


const Residencies = () => {
return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="h-head flexColStart">
                <sapn className='orangeText' >Best Choice</sapn>
                <sapn className='primaryText' >Popular Residencies</sapn>
                <SwiperBottons />
                <Swiper {...sliderSettings} className="swiper">
                    {Data.map((card, i )=>(
                        <SwiperSlide key={i} className="flexStart r-card">
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home"/>
                                <span className="secondaryText r-price  ">
                                    <span style={{color:"orange"}}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </div>
    </section>
);
};

export default Residencies;


const SwiperBottons = ()=>{
    const swiper = useSwiper();
    return(
        <div className='flexCenter r-buttons'>
            <button onClick={()=>swiper.slidePrev()}><AiFillCaretLeft/></button>
            <button onClick={()=>swiper.slideNext()}><AiFillCaretRight/></button>
        </div>
    )
}