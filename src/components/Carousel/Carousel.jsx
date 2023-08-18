import { Carousel } from "@material-tailwind/react";
import logo from "../../assets/logo.png"
import projects1 from "../../assets/projects-1.png"

 
export const projects = [
  {
    name: "Tailwind Site",
    url: projects1,
    demoURL: "https://google.com"
  }
]

export default function CarouselCustomNavigation() {
  return (
    <Carousel
    transition={{duration: 1}}
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-6 h-2 bg-white" : "w-4 h-2 bg-black border-[1px] border-white"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {projects.map((project, index) => (
        <>
          <img 
          key={index}
          src={project.url}
          alt={project.name}
          className="h-full w-full object-cover"
          />

          </>
        )
      )}
      <img
        src={projects1}
        alt="image 1"
        className="h-full w-full object-cover"
        />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full  object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full  object-cover"
      />
    </Carousel>
  );
}