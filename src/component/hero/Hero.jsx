import React from 'react';
import './hero.css'
import {HiLocationMarker} from "react-icons/hi";

const Hero = () => {

    return (
        <section className="hero-wrapper">
            <div className=" paddings innerWidth flexCenter hero-container ">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className='orange-Circle'/>
                        <h1>Discover<br/>Most Suitable<br/>Property </h1>
                    </div>
                    <div className="hero-des flexColStart">
                        <span>  Find a variety of properties that suit you very easilty</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color='var(--blue' size={20}/>
                        <input type="text"/>
                        <button className="button">Search</button>
                    </div>


                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="/hero-image.png" alt="houses"/>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;