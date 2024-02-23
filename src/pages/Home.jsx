import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import { Navigation } from "swiper/modules";

function Home() {
  return (
    <div className="flex  w-screen h-[90%]">
      {/*Perfil de usuario*/}
      <div className="bg-[#3798fa] w-[20%] h-full flex flex-col gap-5">
        <span className="flex items-center cursor-pointer">
          <img
            className="h-10 w-auto flex justify-start mx-4 mt-2 rounded-full"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
          />
          <p className="text-black">UserName</p>
        </span>
        <span className="text-black cursor-pointer ml-3">Configuracion</span>
        <span className="text-black cursor-pointer ml-3">Soporte</span>
        <span className="text-black cursor-pointer ml-3">Ayuda</span>
        <span className="text-black cursor-pointer ml-3">Contacto</span>
        <span className="text-black cursor-pointer ml-3">Cerrar Sesion</span>
      </div>
      {/*Contenido*/}
      <div className="bg-red-300 w-[80%] h-full">
      <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      
          <h4>Contenido</h4>
          
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}

export default Home;
