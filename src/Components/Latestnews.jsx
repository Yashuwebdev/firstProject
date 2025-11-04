import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCard from './BlogCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import img from "../assets/41.jpg"
import img2 from "../assets/51.jpg"
import img3 from "../assets/a.jpg"




// import required modules
import { Pagination } from 'swiper/modules';
function Latestnews() {

    return (
        <>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <BlogCard title={"Make the best of things its an uphill climb long time"} date={"mar 18, 2018"} img={img} ></BlogCard>
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard title={"Trouble with the law since to eastern side of yellow mint "} date={"feb 06, 2018"} img={img2} ></BlogCard>
                </SwiperSlide> 
                <SwiperSlide>
                    <BlogCard title={"Kind of torture to have to watch the show the one day "} date={"mar 14, 2018"} img={img3} ></BlogCard>
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard title={"Make the best of things its an uphill climb long time"} date={"mar 18, 2018"} img={img} ></BlogCard>
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard title={"Trouble with the law since to eastern side of yellow mint "} date={"feb 06, 2018"} img={img2} ></BlogCard>
                </SwiperSlide> 
                <SwiperSlide>
                    <BlogCard title={"Kind of torture to have to watch the show the one day "} date={"mar 14, 2018"} img={img3} ></BlogCard>
                </SwiperSlide>
               
              
           </Swiper>

        </>
    )

}
export default Latestnews