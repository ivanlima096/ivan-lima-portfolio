import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel';

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (currentIndex) => {
    setActiveSlide(currentIndex);
  };

  return (
    <section id="projetos" className="bg-white h-[100vh] mt-12 flex flex-col items-center">
      <h1 className="text-center font-bold text-5xl md:text-7xl lg:text-[5rem] mb-12">PROJETOS</h1>
      <div className="h-[50vh] w-[70vw] md:h-[70vh] md:aspect-video my-10 text-white flex flex-col gap-5 items-center justify-center">
        <Carousel />
      </div>
    </section>
  );
}
