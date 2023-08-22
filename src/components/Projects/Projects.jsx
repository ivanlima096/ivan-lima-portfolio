import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel';

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (currentIndex) => {
    setActiveSlide(currentIndex);
  };

  return (
    <section id="projetos" className="bg-white h-[100vh] md:mt-12 flex flex-col items-center">
      <h1 className="text-center font-bold text-5xl md:text-7xl lg:text-[5rem] mb-3">PROJETOS</h1>
      <p className="text-center font-bold text-lg md:text-xl lg:text-3xl mb-4 w-[80vw]">Abaixo deixo alguns projetos para sua visualização, disponíveis em vídeo, seu deploy e no github. </p>
      <p className="text-center font-bold text-md md:text-xl lg:text-2xl  w-[77vw] md:mb-16">Os projetos são, em sua maioria, feitos em React. Mas também já trabalhei com apenas Javascript, projetos de criação de API com Node e Express, bem como banco de dados com SQL e MongoDB. Já fiz um projeto freelancer com Automação Web utilizando Puppeteer para navegação e captura de dados online e criação de PDF e tabela em Excel.</p>
      <div className="h-[50vh] w-[95vw] md:h-[70vh] md:aspect-video my-10 text-white flex flex-col gap-5 items-center justify-center">
        <Carousel />
      </div>
    </section>
  );
}
