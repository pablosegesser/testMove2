import {Card} from '../Card/card'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
     {Array.from(Array(6)).map((v, i) => (
        <SwiperSlide>
        <Card key={i} title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={"small break top white black"} withButton={false} buttonText={""}/>
       </SwiperSlide> ))} 
    </Swiper>
  );
};