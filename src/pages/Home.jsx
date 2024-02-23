import { HiArrowLongDown } from "react-icons/hi2";
import BgVideo from "../images/bg_video.mp4";
import Figura from "../images/figura.mp4";

import Bag from "../images/bag.png";
import Lamp from "../images/lamp.png";
import TecOne from "../images/tec_one.png";
import TecTwo from "../images/tec_two.png";
import FigOne from "../images/figura_one.png";
import FigTwo from "../images/figura_two.png";
import MoonOne from "../images/moon_one.png";
import MoonTwo from "../images/moon_two.png";
import ArchesOne from "../images/arches_one.png";
import ArchesTwo from "../images/arches_two.png";

import CardOne from "../cells/CellOne";
import CardTwo from "../cells/CellTwo";
import { useParallax } from "react-scroll-parallax";

const Home = () => {

    const parallaxOne = useParallax({ translateY: ['-50', '50'] });
    const parallaxTwo = useParallax({ translateY: ['-80', '80'] });
    const parallaxThree = useParallax({ translateY: ['-110', '110'] });
    const parallaxFour = useParallax({ translateY: ['-140', '140'] });
    const parallaxFive = useParallax({ translateY: ['-170', '170'] });

    return (
        <div className="w-full h-auto overflow-hidden">
            <div className="relative w-full h-screen flex flex-col justify-center gap-5 items-center" id="home">
                <video
                    // autoPlay
                    muted
                    loop
                    className="absolute w-full h-screen object-cover"
                >
                    <source src={BgVideo} type="video/mp4" />
                </video>
                <h1 className="text-[10em] font-bold text-white mt-10 z-10 max-sm:text-7xl">Catapult</h1>
                <h2 className="text-xl font-semibold text-white mb-5 z-10">Featured Projects</h2>
                <HiArrowLongDown className="text-white text-4xl z-10 animate-bouncing" />
            </div>

            <div className="relative flex w-full h-screen max-lg:flex-col" id="bg_stuff">
                <div
                    className="absolute top-0 left-0 w-full h-full overflow-hidden"
                >
                    <div className="w-full h-full" id="bg_one" ref={parallaxOne.ref} />
                </div>

                <CardOne
                    title={'Mashup'}
                    first={Bag}
                    second={Lamp}
                    link={'/mashup'}
                />
            </div>

            <div className="relative flex w-full h-screen max-lg:flex-col-reverse" id="bg_tec">
                <div
                    className="absolute top-0 left-0 w-full h-full overflow-hidden"
                >
                    <div className="w-full h-full" id="bg_two" ref={parallaxTwo.ref} />
                </div>

                <CardTwo
                    title={'Tectonic'}
                    first={TecOne}
                    second={TecTwo}
                    link={'/tectonic'}
                />
            </div>

            <div className="relative flex w-full h-screen max-lg:flex-col" id="bg_figura">
                <div
                    className="absolute top-0 left-0 w-full h-full overflow-hidden"
                >
                    <video
                        // autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                        style={{ zIndex: -2 }}
                        ref={parallaxThree.ref}
                    >
                        <source src={Figura} type="video/mp4" />
                    </video>
                </div>

                <CardOne
                    title={'Figura'}
                    first={FigOne}
                    second={FigTwo}
                    link={'/figura'}
                />
            </div>

            <div className="relative flex w-full h-screen max-lg:flex-col-reverse" id="bg_moon">
                <div
                    className="absolute top-0 left-0 w-full h-full overflow-hidden"
                >
                    <div className="w-full h-full" id="bg_three" ref={parallaxFour.ref} />
                </div>

                <CardTwo
                    title={'Moon'}
                    first={MoonOne}
                    second={MoonTwo}
                    link={'/moon'}
                />
            </div>

            <div className="relative flex w-full h-screen max-lg:flex-col" id="bg_arches">
                <div
                    className="absolute top-0 left-0 w-full h-full overflow-hidden"
                >
                    <div className="w-full h-full" id="bg_four" ref={parallaxFive.ref} />
                </div>

                <CardOne
                    title={'Arches'}
                    first={ArchesOne}
                    second={ArchesTwo}
                    link={'/arches'}
                />
            </div>

        </div>
    )
}

export default Home;