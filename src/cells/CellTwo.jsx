import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";

const CellTwo = ({ title, first, second, link }) => {

    const tranSlow = useParallax({
        translateY: [-20, 20]
    });

    const tranFast = useParallax({
        translateY: [-30, 30]
    });

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])

    return (
        <>
            <div className="relative p-[5%] w-[50%] h-full z-10">
                <img
                    src={first}
                    alt="photo"
                    ref={tranFast.ref}
                    className="max-lg:hidden"
                />
                <img
                    src={second}
                    alt="photo"
                    className='absolute right-24 bottom-32'
                    ref={tranSlow.ref}
                />
            </div>
            <div
                data-aos="fade-left"
                data-aos-duration="2000"
                className="w-[50%] p-[10%] h-full grid gap-10 place-content-center z-10"
            >
                <h1 className="text-6xl text-white font-bold">{title}</h1>
                <h2 className="text-xl text-white">Share information on a previous project here to attract new clients. Provide a brief summary to help visitors understand the context and background of the work.</h2>
                <Link to={link} className="w-14 h-14 rounded-full border-2 grid place-items-center hover:scale-105 duration-300">
                    <FaArrowRightLong className="text-white text-2xl" />
                </Link>
            </div>
        </>
    )
}

export default CellTwo;