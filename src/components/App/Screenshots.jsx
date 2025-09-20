import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import screenshots from '@data/App/screenshots.json';

import "swiper/css";

const Screenshots = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadSwiper(true);
    }, 0);
  }, []);

  return (
    <div className="screenshots style-4" data-scroll-index="4">
      <div className="screenshots-slider style-4">
        {
          loadSwiper && (
            <Swiper
              className="swiper-container"
              spaceBetween={0}
              slidesPerView={5}
              pagination={false}
              navigation={false}
              mousewheel={false}
              keyboard={true}
              loop={true}
              autoplay={{
                delay: 4000
              }}
              speed={1000}
              centeredSlides={true}
              breakpoints={{
                0: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 2,
                },
                787: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 5,
                }
              }}
            >
              {
                screenshots.map((screenshot, index) => (
                  <SwiperSlide key={index}>
                    <div className="img">
                      <img src={screenshot} alt="" />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          )
        }
      </div>
      <img src="/assets/img/screenshots/hand.png" alt="" className="mob-hand" />
    </div>
  )
}

export default Screenshots