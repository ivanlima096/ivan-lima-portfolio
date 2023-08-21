import styles from './Modal.css'

export default function Modal({ isOpen, setIsOpenModal, projectName, projectUrl }) {
  if (isOpen == true) {
    return (
      <div className='modalBackground  p-[10rem] fixed top-0 left-0 bottom-0 right-0 bg-[#000000b3] z-50 flex items-center justify-center'>
        <div className='bg-black flex flex-col rounded-2xl p-5'>
          <button onClick={setIsOpenModal}>X</button>
          <h1>{projectName}</h1>
          <img src={projectUrl} alt={projectName} />
        </div>
      </div>
    )
  }
  return null
}