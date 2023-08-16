import tech from '../../assets/tech.png';
import { AiFillHtml5 } from 'react-icons/ai';
import styles from './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className='flex flex-col'>
      <h1 className='mx-auto mb-4 font-bold text-5xl'>SKILLS</h1>

      <div className="h-[93vh] flex items-center justify-center relative">
        <div className="planet-orbit">
          <div id="html" className="planet shadow-lg flex flex-col">
            <span className='font-bold'>HTML</span>
            <AiFillHtml5 size={120} />
          </div>
        </div>

        <img src={tech} alt="tech" className="centered-image md:w-[18rem] sm:w-[12rem] w-[8rem]" />
      </div>
    </section>
  );
}