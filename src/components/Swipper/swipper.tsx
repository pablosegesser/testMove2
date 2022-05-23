import { Navigation, Scrollbar, A11y } from 'swiper';
import {Card} from '../Card/card'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      scrollbar={{ draggable: true }}
    >
     {Array.from(Array(6)).map(() => (
        <SwiperSlide>
        <Card title={"hello world"} name={'ASHLEY BENSON'} imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ashley_Benson_2012.jpg/640px-Ashley_Benson_2012.jpg'} description={'fashion worldest event'} className={"small break top white black"} withButton={false} buttonText={""}/>
       </SwiperSlide> ))} 
    </Swiper>
  );
};