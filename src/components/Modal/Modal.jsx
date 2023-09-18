import React, { useState } from 'react';
import Button from '../Button/Button';
import { BiXCircle } from 'react-icons/bi';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { BiLogoGithub } from "react-icons/bi";
import { BsPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";

export default function Modal({
  isOpen,
  setIsOpenModal,
  projectName,
  projectUrl,
  projectGithub,
  projectDescription,
  projectTech,
  projectVideo,
  projectSite
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    if (!isOpen) {
      setIsVideoPlaying(false)
    }
    setIsVideoPlaying(!isVideoPlaying);
    const videoElement = document.getElementById('projectVideo');
    if (!isVideoPlaying) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  if (isOpen) {
    return (
      <div
        className='py-2 md:p-[10rem] fixed top-0 left-0 bottom-0 right-0 bg-[#000000d9] md:bg-[#000000b3] z-50 flex items-center justify-center'
        onClick={setIsOpenModal}>
        <div
          className='relative rounded-3xl p-5 h-[70vh] w-[100%] md:h-[78vh] md:w-[90vw] lg:h-[95vh] lg:w-[95vw] max-w-[95vw] aspect-video'
          onClick={handleContentClick}
        >
          <div className='absolute top-0 left-0 w-[full] h-full z-1 flex flex-col items-center justify-end '>
            <div className='bg-[#000000b3] w-[92vw] sm:w-[100%] h-full rounded-xl p-5 shadow-md justify-between flex items-center flex-col'>
              <div className='flex justify-between z-50 sm:mt-5 w-full  '>
                <h1 className='text-2xl md:text-4xl uppercase font-bold py-2'>{projectName}</h1>
                <button className='text-2xl md:text-3xl' onClick={setIsOpenModal}>
                  <BiXCircle />
                </button>
              </div>
              <video
                id="projectVideo"
                muted
                loop
                src={projectVideo}
                alt={projectName}
                className='absolute top-24 left-0 w-full max-h-[40%] aspect-square md:max-h-[90%] md:aspect-video object-fill md:object-fill z-[-10] rounded-3xl'
              />
              <button onClick={handlePlayButtonClick} className='text-7xl w-10 text-[#887979ce]'>
                {isVideoPlaying ? <BsFillPauseCircleFill opacity={0.1} /> : <BsPlayCircleFill />}
              </button>
              <div className='text-[0.8rem] md:text-[0.8rem] lg:text-lg top-0 md:top-50 w-full'>
                <h4>Descrição</h4>
                <p className='pb-2'>{projectDescription}</p>
                <h4>Tecnologias Utilizadas</h4>
                <p>{projectTech}</p>
                <div className='flex justify-center mt-4 gap-5 font-bold'>
                  <Button className='button mr-4' text={`Ver Site`} icon={<BsArrowUpRightCircleFill />} url={projectSite} />
                  <Button text={`Github`} icon={<BiLogoGithub />} url={projectGithub} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
