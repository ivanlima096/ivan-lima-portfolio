import React, { useState } from 'react';
import { BsLinkedin, BsGithub, BsWhatsapp, BsDownload } from "react-icons/bs"
import styles from "./ContactForm.css"

export default function ContactForm() {


  return (
    <div id="contato" className='mt-32 md:mt-[24rem] lg:mt-96 bg-black w-[100vw] h-[105vh] md:h-[95vh] flex flex-col items-center text-white'>
      <h1 className="text-center font-bold text-5xl md:text-7xl lg:text-[5rem] my-12 uppercase">Contato</h1>
      <p className="text-center font-bold text-lg md:text-xl lg:text-2xl mb-12 w-[80vw]">Preencha o formulário abaixo para entrar em contato comigo. Deixe seu feedback sobre o site, tire dúvidas sobre algo ou me contrate! </p>
      <div className='form bg-white w-[90vw] md:w-[75vw] lg:w-[60vw] p-6 rounded-xl text-black md:text-lg lg:text-xl mx-auto'>
        <form
          action="https://formsubmit.co/1832f1e081625c4384784f7977450d02"
          method="POST"
        >
          <div className=' md:grid grid-cols-2 gap-16'>
            <div>
              <label htmlFor="name" className="block font-bold my-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-[100%] font-bold  border rounded-md p-2"
                placeholder='Digite aqui seu nome...'
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold my-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-[100%] font-bold border rounded-md p-2"
                placeholder='seuemail@email.com'
                required
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="message" className="block font-bold my-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              className="w-[100%] font-bold border rounded-md p-2"
              placeholder='Deixe aqui sua mensagem de feedback, dúvida ou contato'
              rows="4"
              required
            />
          </div>
          <div className='w-[100%] text-center my-2'>
            <button
              type="submit"
              className="bg-black border-2 border-black text-white px-5 py-3 rounded-md text-center hover:scale-105 hover:bg-transparent hover:text-black ease duration-300 "
            >
              Enviar
            </button>
          </div>
        </form>

        <p className='inline-block my-2 md:text-lg lg:text-xl text-center w-full'>E caso queira, me contate por: </p>
        <div className="flex items-center justify-center gap-10 mt-2 text-lg md:text-3xl sm:text-2xl">
          <a className="hover:scale-150 ease duration-300" href="https://www.linkedin.com/in/ivan-lima-dev/" target="_blank">< BsLinkedin /></a >
          <a className="hover:scale-150 ease duration-300" href="https://github.com/ivanlima096" target="_blank">< BsGithub /></a >
          <a className="hover:scale-150 ease duration-300" href="https://wa.me/5513988013623" target="_blank"> <BsWhatsapp /></a>
        </div>
      </div>
    </div>
  );
}