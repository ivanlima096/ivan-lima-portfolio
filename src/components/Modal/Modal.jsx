import Button from '../Button/Button';
import { BiXCircle } from 'react-icons/bi';
import { BsEyeFill, BsArrowUpRightCircleFill } from "react-icons/bs";
import { BiLogoGithub } from "react-icons/bi";



export default function Modal({ isOpen, setIsOpenModal, projectName, projectUrl, projectGithub, projectDescription, projectTech }) {
  const handleContentClick = (event) => {
    event.stopPropagation();
  }

  if (isOpen) {
    return (
      <div
        className='modalBackground py-2 md:p-[10rem] fixed top-0 left-0 bottom-0 right-0 bg-[#000000b3] z-50 flex items-center justify-center'
        onClick={setIsOpenModal}>
        <div
          className='bg-white border-gray-600 border-2 flex flex-col rounded-2xl p-5 top-0 left-0 h-[60vh] w-[90vw] md:h-[78vh] md:w-[90vw] lg:h-[95vh] lg:w-[95vw] max-w-[95vw] aspect-video'
          onClick={handleContentClick}>
          <div className='bg-black rounded-xl flex flex-col items-center '>

            <div className=' flex justify-between px-4 py-1 w-[100%]'>
              <h1 className=' text-2xl md:text-4xl uppercase font-bold py-2'>{projectName}</h1>
              <button
                className='text-xl md:text-3xl'
                onClick={setIsOpenModal}><BiXCircle /></button>
            </div>
            <div className='flex flex-col text-[0.5rem] md:text-[0.8rem] lg:text-lg p-1'>
              <img src={projectUrl} alt={projectName} className='rounded-2xl p-1 md:py-4 h-[22vh] md:h-[40vh] lg:h-[48vh] aspect-video object-cover' />
              <h4>Descrição</h4>
              <p className='pb-2'>{projectDescription}</p>
              <h4>Tecnologias Utilizadas</h4>
              <p>{projectTech}</p>
            </div>
          </div>
          <div
            className='bg-white flex flex-col items-center pt-2 pb-2 gap-2 font-bold text-sm md:text-xl justify-center md:flex-row md:justify-around md:gap-0'>
            <Button className="button" text={`Ver Site`} icon={<BsArrowUpRightCircleFill />} url={projectUrl} />
            <Button text={`Github`} icon={<BiLogoGithub />} url={projectGithub} />
          </div>
        </div>
      </div >
    )
  }
  return null
}