import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import { useUIState } from "../providers/UIStateProvider";

const Header = () => {

  const [visible, setVisible] = useState(true);
  const { isNavShowing, setIsNavShowing } = useUIState();

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll >= 200) {
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
        onClick={() => {
          setIsNavShowing(false);
        }}
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
            <div className="fixed top-0 right-0 bg-black w-[350px] h-full animate-tranX_in grid gap-8 place-content-center text-white max-sm:w-full">
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
            <div className="fixed top-0 right-0 bg-black w-[350px] h-full animate-tranX_out grid gap-8 place-content-center text-white max-sm:w-full">
              <Drawer />
            </div>
          </>
        )
      }
    </div>
  )
}

export default Header;