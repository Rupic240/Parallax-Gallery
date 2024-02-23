import { Link } from "react-router-dom";
import projectsBG from "../images/projects.png";
import { HiArrowLongDown } from "react-icons/hi2";
import { prjData } from "../data";

const Projects = () => {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col items-center justify-center gap-10" id="prj">
        <img
          src={projectsBG} alt="background"
          className="absolute -z-10 w-full h-full object-cover"
        />
        <h1 className="text-9xl text-white mb-5 ">All Projects</h1>
        <HiArrowLongDown className="text-white text-8xl z-10 animate-bouncing" />
      </div>
      <div className="w-full h-auto bg-black grid grid-cols-2 place-items-center gap-10 py-20 px-10">
        {
          prjData.map(({ id, path, name, img }) => {
            return (
              <div className="relative w-full h-[600px] z-10 hover:opacity-75 duration-300 max-lg:h-[400px]" id="prj">
                <Link key={id} to={path}>
                  <img src={img} alt="prj_image" className="absolute w-full h-full object-fill -z-10 max-lg:h-auto" />
                  <button
                    className="text-6xl w-full h-full font-semibold text-white text-center"
                  >
                    {name}
                  </button>
                </Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Projects;