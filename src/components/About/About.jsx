import { BsLinkedin, BsGithub, BsWhatsapp, BsDownload } from "react-icons/bs"
import Button from "../Button/Button"

export default function About() {
  return (
    <section id="sobre" className="grid grid-cols-1 xl:grid-cols-2 h-[100vh] w-[100vw] mt-[5rem]">
      <div className="leftSide w-100% h-[95%] lg:h-[98%] xl:h-[82%] bg-black rounded-lg my-5 mx-12 text-white font-bold text-5xl md:text-7xl lg:text-[7rem]">
        <div className="mx-2 md:mx-44 lg:mx-2 flex justify-end px-16 pt-10">
          <h1>IVAN</h1>
        </div>
        <div className="flex mx-2 md:mx-44 lg:mx-2 justify-start p-8">
          <h1>LIMA.</h1>
        </div>
        <div className="text-2xl min-[374px]:text-3xl min-[425px]:text-4xl md:text-7xl  lg:text-8xl xl:text-[5rem] 2xl:text-[7rem]  w-100%">

          <h1 className="ml-5  w-100% flex justify-start italic ">/////FRONTEND</h1>
          <h1 className="w-100% flex justify-center italic text-black bg-white">///////////</h1>
          <h1 className="mt-2 mr-5 w-100% flex justify-end items-center italic">PORTFOLIO/////</h1>
        </div>

      </div>
      <div className="rightSide  w-100% h-[80%] py-10 px-4 font-semibold mx-12 text-md md:text-xl lg:text-3xl flex flex-col justify-between">
        <div>

          <p className="md:leading-10 md:tracking-wider">
            Olá! Sou Ivan Lima, Desenvolvedor Frontend de Santos, São Paulo, apaixonado por resolver problemas e fascinado por tecnologia. Meu foco é em Frontend, mas tenho noções de Backend, tenho 27 anos e estou constantemente explorando novas possibilidades.
          </p>
          <p className="md:leading-10 md:tracking-wider mt-3">
            Bem-vindo ao meu portfólio, onde compartilho meu trabalho e paixão pela tecnologia.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10 mt-10 xl:mt-32 text-lg md:text-3xl sm:text-2xl">
          <a className="hover:scale-150 ease duration-300" href="https://www.linkedin.com/in/ivan-lima-dev/" target="_blank">< BsLinkedin /></a >
          <a className="hover:scale-150 ease duration-300" href="https://github.com/ivanlima096" target="_blank">< BsGithub /></a >
          <a className="hover:scale-150 ease duration-300" href="https://wa.me/5513988013623" target="_blank"> <BsWhatsapp /></a>
          <Button text={`Ver CV`} color="black" textColor="white" hoverColor="white" hoverTextColor="black" icon={<BsDownload />} />

        </div>
      </div>
    </section>
  )
}