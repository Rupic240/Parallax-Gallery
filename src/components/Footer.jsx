import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import Insta from "../assets/insta.svg";
import { useState } from "react";
import { dropDownPaths } from "../data";

const Footer = () => {

  const [isShow, setIsShow] = useState(false);

  return (
    <div className={`w-full h-auto bg-black p-[4%] text-white flex justify-between items-center ${isShow ? 'h-[70%]' : ''}`}>
      <div className="w-auto h-full grid gap-5">
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
          <Link to='/'>Home</Link>
          <div>
            <Link to='/projects' className="text-lg">
              All Projects
            </Link>
            <button onClick={() => setIsShow(prev => !prev)}>
              {
                isShow ? (
                  <IoIosArrowUp className="inline-block ml-5 cursor-pointer" />
                ) : (
                  <IoIosArrowDown className="inline-block ml-5 cursor-pointer" />
                )
              }
            </button>
            {
              isShow && (
                <ul className="w-full h-auto grid gap-2 my-3">
                  {
                    dropDownPaths.map(({ path, name }, index) => {
                      return (
                        <Link
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
      <div className="w-auto h-full grid gap-5 place-items-end">
        <Link to='/'>
          <img src={Insta} alt="instagram" />
        </Link>
        <p>© 2024 by Rupic. Made with <span className="underline cursor-pointer">Rupic Studio™</span></p>
      </div>
    </div>
  )
}

export default Footer;