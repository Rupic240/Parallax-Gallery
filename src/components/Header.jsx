import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";

const Header = () => {

  const [visible, setVisible] = useState(true);
  const [isNavShowing, setIsNavShowing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 250) {
        setVisible(false);
        setIsNavShowing(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full h-24 flex px-10 justify-between items-center z-40 ${visible ? 'animate-fade_in' : ' animate-fade_out'}`}
    >
      <Link
        to='/'
        className="text-3xl font-bold text-white"
      >
        Catapult
      </Link>
      {
        isNavShowing ? (
          <>
            <FaTimes
              className="text-4xl text-white cursor-pointer z-50 animate-fade_in"
              onClick={() => {
                setIsNavShowing(prev => !prev);
              }}
            />
            <div className="fixed top-0 right-0 bg-black w-[350px] h-full animate-tranX_in grid gap-8 place-content-center text-white">
              <Drawer />
            </div>
          </>
        ) : (
          <>
            <IoMdMenu
              className="text-4xl text-white cursor-pointer z-50 animate-fade_in"
              onClick={() => {
                setIsNavShowing(prev => !prev)
              }}
            />
            <div className="fixed top-0 right-0 bg-black w-[350px] h-full animate-tranX_out grid gap-8 place-content-center text-white">
              <Drawer />
            </div>
          </>
        )
      }
    </div>
  )
}

export default Header;