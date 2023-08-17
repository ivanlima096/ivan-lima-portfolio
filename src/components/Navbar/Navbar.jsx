import { useState } from "react"
import logo from "../../assets/logo.png"
import styles from "./Navbar.css"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

export default function Navbar() {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  function scrollToSection(e, sectionId) {
    e.preventDefault()

    const section = document.getElementById(sectionId);
    if (section) {
      let offset =
        (sectionId === "skills") ? 345 : 80
      const sectionTop = section.offsetTop - offset;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
    }
  }

  return (
    <nav className="bg-[#000] w-[100vw]  h-[5rem] flex justify-between items-center sticky top-0 shadow-lg">
      <img src={logo} alt="logo" className="w-[10rem] mx-12 select-none" />
      <ul className="gap-5 text-lg font-bold mx-12 hidden md:flex">
        <li><a href="#sobre" className="text-white uppercase font-bold" onClick={(e) => scrollToSection(e, "sobre")}>Sobre</a></li>
        <li><a href="#skills" className="text-white  uppercase font-bold" onClick={(e) => scrollToSection(e, "skills")}>skills</a></li>
        <li><a href="#projetos" className="text-white  uppercase font-bold" onClick={(e) => scrollToSection(e, "projetos")}>Projetos</a></li>
        <li><a href="#contato" className="text-white  uppercase font-bold" onClick={(e) => scrollToSection(e, "contato")}>contato</a></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={33} className="text-white p-1 border-2 rounded mr-10 border-white hover:cursor-pointer" />
          : <AiOutlineMenu size={33} className="text-white p-1 border-2 rounded mr-10 border-white hover:cursor-pointer" />}
      </div>
      <div className={!nav
        ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease duration-500"
        : "fixed left-[-330%]"}>
        <img src={logo} alt="logo" className="w-[10rem] mx-12 select-none" />
        <ul className="flex flex-col gap-6 text-lg font-bold mx-12 my-4 py-4">
          <li><a href="#inicio" className="text-white uppercase font-bold">Início</a></li>
          <li><a href="#skills" className="text-white  uppercase font-bold">skills</a></li>
          <li><a href="#projetos" className="text-white  uppercase font-bold">Projetos</a></li>
          <li><a href="#contato" className="text-white  uppercase font-bold">contato</a></li>
        </ul>
      </div>
    </nav>
  )
}