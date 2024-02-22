import { LiaTimesSolid } from "react-icons/lia";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { Navigation, EffectFade } from 'swiper/modules';

const CardSwiper = ({ data, setShowSwiper, selectedImageID }) => {

    const selectedIndex = selectedImageID ? data.findIndex(item => item.id === selectedImageID) : 0;

    return (
        <div className='fixed w-full h-full top-0 left-0 z-50'>
            <button
                className='absolute top-10 right-16 z-50'
                onClick={() => {
                    setShowSwiper(false);
                }}
            >
                <LiaTimesSolid className='text-4xl text-white font-bold' />
            </button>
            <Swiper
                effect={'fade'}
                style={{
                    '--swiper-navigation-color': '#fff',
                }}
                navigation={true}
                modules={[EffectFade, Navigation]}
                className="mySwiper"
                initialSlide={selectedIndex >= 0 ? selectedIndex : 0}
            >
                {
                    data.map(item => {
                        return (
                            <SwiperSlide key={item.id}>
                                {
                                    item.img && (
                                        <img
                                            src={item.img}
                                            className="w-auto h-auto"
                                        />
                                    )
                                }
                                {
                                    item.vd && (
                                        <video
                                            // autoPlay
                                            muted
                                            loop
                                            className="w-auto h-auto"
                                        >
                                            <source src={item.vd} type="video/mp4" />
                                        </video>
                                    )
                                }
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default CardSwiper;