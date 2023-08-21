import Button from '../Button/Button';
import { BiXCircle } from 'react-icons/bi';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { BiLogoGithub } from "react-icons/bi";

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
  const handleContentClick = (event) => {
    event.stopPropagation();
  }

  if (isOpen) {
    return (
      <div
        className=' py-2 md:p-[10rem] fixed top-0 left-0 bottom-0 right-0 bg-[#000000b3] z-50 flex items-center justify-center'
        onClick={setIsOpenModal}>
        <div
          className='relative rounded-3xl p-5 h-[70vh] w-[90vw] md:h-[78vh] md:w-[90vw] lg:h-[95vh] lg:w-[95vw] max-w-[95vw] aspect-video'
          onClick={handleContentClick}
        >
          <video
            autoPlay
            muted
            loop
            src={projectVideo}
            alt={projectName}
            className='absolute top-0 left-0 w-full h-full object-cover z-0 rounded-3xl'
          />
          <div className='absolute top-0 left-0 w-full h-full z-1 flex flex-col items-center justify-end'>
            <div className='bg-[#000000b3] rounded-xl p-5 shadow-md'>
              <div className='flex justify-between'>
                <h1 className='text-2xl md:text-4xl uppercase font-bold py-2'>{projectName}</h1>
                <button className='text-xl md:text-3xl' onClick={setIsOpenModal}>
                  <BiXCircle />
                </button>
              </div>
              <div className='text-[0.5rem] md:text-[0.8rem] lg:text-lg'>
                <h4>Descrição</h4>
                <p className='pb-2'>{projectDescription}</p>
                <h4>Tecnologias Utilizadas</h4>
                <p>{projectTech}</p>
              </div>
              <div className='flex justify-center mt-4 gap-5 font-bold'>
                <Button className='button mr-4' text={`Ver Site`} icon={<BsArrowUpRightCircleFill />} url={projectSite} />
                <Button text={`Github`} icon={<BiLogoGithub />} url={projectGithub} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
