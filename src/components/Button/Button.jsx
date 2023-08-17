export default function Button({ text, color, textColor, icon }) {
  return (
    <a
      className={
        ` h-5 bg-${color} min-w-[9rem] text-md px-5 py-5 md:px-5 md:py-10 s text-${textColor} 
        flex items-center justify-between gap-5 rounded-md border-2 border-${color}
        hover:bg-transparent hover:text-${color} ease duration-300 hover:scale-105`
      }
      href="https://drive.google.com/file/d/144wE80aeZA2JarVSf2I2uyynP__nuTFr/view?usp=sharings"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}{icon}
    </a>
  );
}