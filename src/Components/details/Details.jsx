// import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";
import slider1 from '../../assets/Slider/qqq.jpg'
import slider2 from '../../assets/Slider/mclaren-p1.jpg'
import slider3 from '../../assets/Slider/audi-r8.jpg'
import SubProduct from "../SubProduct/SubProduct";



const Details = () => {

    const brand = useLoaderData()
    console.log(brand)


    return (
        <div>
            <div className="carousel max-h-[50vh] w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:w-3/4   md:gap-5  mx-auto">
                {
                    brand.length > 0 ? brand?.map((item,index)=><SubProduct key={index} item={item}></SubProduct>) : <div className="md:h-[350px]  w-full"><p className="md:text-6xl font-neon text-center">New Product Are Coming soon ....</p></div>
                }
            </div>
        </div>
    );
};

export default Details;