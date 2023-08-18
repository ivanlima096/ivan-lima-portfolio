export default function Button({ text, icon }) {
  return (
    <a
      className={
        `h-5  min-w-[9rem] text-md px-5 py-5 md:px-5 md:py-10 
        flex items-center justify-between gap-5 rounded-md border-2 border-black
         ease duration-300 hover:scale-110 bg-black text-white hover:bg-white hover:text-black`
      }
      href="https://drive.google.com/file/d/144wE80aeZA2JarVSf2I2uyynP__nuTFr/view?usp=sharings"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}{icon}
    </a>
  );
}