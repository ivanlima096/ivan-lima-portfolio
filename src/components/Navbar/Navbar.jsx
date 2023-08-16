import { useState } from "react"
import logo from "../../assets/logo.png"
import styles from "./Navbar.css"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

export default function Navbar() {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="bg-[#000] w-[100%] lg:max-w[99.1vw] h-[5rem] flex justify-between items-center sticky top-0 shadow-lg">
      <img src={logo} alt="logo" className="w-[10rem] mx-12 select-none" />
      <ul className="gap-5 text-lg font-bold mx-12 hidden md:flex">
        <li><a href="#inicio" className="text-white uppercase font-bold">Início</a></li>
        <li><a href="#skills" className="text-white  uppercase font-bold">skills</a></li>
        <li><a href="#projetos" className="text-white  uppercase font-bold">Projetos</a></li>
        <li><a href="#contato" className="text-white  uppercase font-bold">contato</a></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={22} className="text-white" /> : <AiOutlineMenu size={22} className="text-white" />}
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