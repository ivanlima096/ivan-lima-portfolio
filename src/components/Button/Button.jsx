export default function Button({ text, icon, url, handleFunction }) {
  return (
    <a
      className={
        `h-5  min-w-[9rem] w-[12rem] text-md px-5 py-5 md:px-5 md:py-10 select-none
        flex items-center justify-between gap-5 rounded-md border-2 border-black
         ease duration-300 hover:scale-110 bg-black text-white hover:bg-white hover:text-black cursor-pointer`
      }
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleFunction}
    >
      {text}{icon}
    </a>
  );
}