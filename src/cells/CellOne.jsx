import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";
import 'react-lazy-load-image-component/src/effects/blur.css';

const CellOne = ({ title, first, second, link }) => {

    const tranSlow = useParallax({
        translateY: [-20, 20]
    });

    const tranFast = useParallax({
        translateY: [-30, 30]
    });

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div

                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="300"
                className="w-[50%] p-[10%] h-full grid gap-10 place-content-center z-10 lg_content"
            >
                <h1 className="text-6xl text-white font-bold max-sm:text-5xl">{title}</h1>
                <h2 className="text-xl text-white max-sm:text-lg max-sm:text-center">Share information on a previous project here to attract new clients. Provide a brief summary to help visitors understand the context and background of the work.</h2>
                <Link to={link} className="w-14 h-14 rounded-full border-2 grid place-items-center hover:scale-105 duration-300">
                    <FaArrowRightLong className="text-white text-2xl" />
                </Link>
            </div>
            <div className="relative p-[5%] w-[50%] h-full z-10 max-lg:w-full max-sm:w-[200px] max-sm:m-auto">
                <LazyLoadImage
                    src={first}
                    alt="photo"
                    effect="blur"
                    delayTime={300}
                    className="absolute left-12 bottom-32 w-60 h-auto cell_one"
                    ref={tranSlow.ref}
                />
                <LazyLoadImage
                    src={second}
                    alt="photo"
                    effect="blur"
                    delayTime={300}
                    className="absolute right-12 w-60 h-auto cell_two"
                    ref={tranFast.ref}
                />
            </div>
        </>
    )
}

export default CellOne;