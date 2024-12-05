import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import data from "../data.json";
import { FaGithub } from "react-icons/fa6";
import { useUIState } from "../providers/UIStateProvider";

const Footer = () => {

  const { isShowFooterDrop, setIsShowFooterDrop } = useUIState();

  const hideFooterDropDown = () => {
    setIsShowFooterDrop(false);
    scrollTo(0);
  }

  return (
    <div className={`w-full h-auto bg-black p-[4%] text-white grid grid-cols-3 place-items-center max-lg:grid-cols-1 max-lg:gap-10 max-sm:place-items-start ${isShowFooterDrop ? 'h-[70%]' : ''}`}>
      <div className={`w-auto h-full flex flex-col justify-center gap-5 ${isShowFooterDrop ? 'justify-between' : ''}`}>
        <Link
          to='/'
          className="text-4xl font-bold"
        >
          Catapult
        </Link>
        <div className="text-lg">
          <p>Mail: swanhtetpaing240@gamil.com</p>
          <p>Tel: (+95) 9968 421 586</p>
          <p>Yangon, Dawbon</p>
        </div>
      </div>
      <div className="w-auto h-full grid gap-3">
        <div className="grid gap-3 text-lg">
          <Link onClick={hideFooterDropDown} to='/'>Home</Link>
          <div>
            <Link onClick={hideFooterDropDown} to='/projects' className="text-lg">
              All Projects
            </Link>
            <button onClick={() => setIsShowFooterDrop(prev => !prev)}>
              {
                isShowFooterDrop ? (
                  <IoIosArrowUp className="inline-block ml-5 cursor-pointer" />
                ) : (
                  <IoIosArrowDown className="inline-block ml-5 cursor-pointer" />
                )
              }
            </button>
            {
              isShowFooterDrop && (
                <ul className="w-full h-auto grid gap-2 my-3">
                  {
                    data.dropDownPaths.map(({ path, name }, index) => {
                      return (
                        <Link onClick={hideFooterDropDown}
                          key={index}
                          to={path}
                          className="pl-5"
                        >
                          {name}
                        </Link>
                      )
                    })
                  }
                </ul>
              )
            }
          </div>
          <Link to='/info'>info</Link>
        </div>
        <Link to='/privacy'>Privacy Policy</Link>
      </div>
      <div className={`w-auto h-full flex flex-col justify-center max-sm:items-start gap-5 items-end ${isShowFooterDrop ? 'justify-between' : ''}`}>
        <Link to="https://github.com/Rupic240">
          <FaGithub className="text-2xl" />
        </Link>
        <p>© 2024 by Rupic. Made with <span className="underline cursor-pointer">Rupic Studio™</span></p>
      </div>
    </div>
  )
}

export default Footer;