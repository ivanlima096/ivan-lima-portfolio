export default function About() {
  return (
    <section id="sobre" className="grid grid-cols-2 my-10 h-[100vh]">
      <div className="leftSide w-100% h-[50rem] bg-black rounded-lg my-8 mx-12 text-white font-bold text-5xl md:text-7xl lg:text-9xl">
        <div className="mx-6 flex justify-center px-16 pt-20">
          <h1>IVAN</h1>
        </div>
        <div className="flex justify-center p-8">
          <h1>LIMA.</h1>
        </div>
        <h1 className="mt-6 ml-8 w-100% flex justify-start italic">//////</h1>
        <h1 className="w-100% flex justify-center italic text-black bg-white">//////</h1>
        <h1 className="mb-8 mr-8 w-100% flex justify-end italic">//////</h1>

      </div>
      <div className="rightSide w-100% h-[50rem] py-20 px-2 font-semibold bg-teal-300 my-8 mx-12 text-xl md:text-xl lg:text-3xl">
        <p>Sou Ivan Lima, Desenvolvedor Frontend de Santos, São Paulo. Apaixonado  por resolver problemas e curioso por tudo acerca de tecnologia.</p>

      </div>
    </section>
  )
}