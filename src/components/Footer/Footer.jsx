import { BsLinkedin, BsGithub, BsWhatsapp, BsArrowUp } from "react-icons/bs";

export default function Footer() {


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="h-[8vh] bg-black relative flex justify-center">
      <div className="flex items-center justify-center gap-10 text-white text-lg md:text-3xl sm:text-2xl h-full">
        <a className="hover:scale-125 ease duration-300" href="https://www.linkedin.com/in/ivan-lima-dev/" target="_blank"><BsLinkedin /></a>
        <a className="hover:scale-125 ease duration-300" href="https://github.com/ivanlima096" target="_blank"><BsGithub /></a>
        <a className="hover:scale-125 ease duration-300" href="https://wa.me/5513988013623" target="_blank"><BsWhatsapp /></a>
      </div>

      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-[#232323] text-white rounded-full shadow-md absolute bottom-4 right-12 flex items-center justify-center cursor-pointer transition duration-300 hover:bg-gray-700"
      >
        <BsArrowUp size={20} />
      </button>
      )
    </footer>
  );
}
