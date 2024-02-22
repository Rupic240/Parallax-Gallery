import CardOne from "../cards/CardOne";
import CardTwo from "../cards/CardTwo";

import { Link } from "react-router-dom";
import { mashupData } from "../data";
import CardSwiper from "../cards/CardSwiper";

const Mashup = ({ showSwiper, setShowSwiper, selectedImageID, handleClick }) => {
    return (
        <div className="w-full h-auto bg-neutral-800 p-[10%]">
            <div className="grid grid-cols-2 gap-5 mb-10">
                <CardOne
                    title={'Mashup'}
                    client={'Sophia Nguyen'}
                    year={2025}
                >
                    {
                        mashupData.filter(item => item.category === "mOne").map(({ id, img }) => {
                            return (
                                <img
                                    key={id}
                                    src={img}
                                    alt="image"
                                    className="w-full h-auto object-fill cursor-pointer hover:opacity-80 duration-300"
                                    onClick={() => handleClick(id)}
                                />
                            )
                        })
                    }
                </CardOne>
                <CardTwo>
                    {
                        mashupData.filter(item => item.category === "mTwo").map(({ id, img }) => {
                            return (
                                <img
                                    key={id}
                                    src={img}
                                    alt="image"
                                    className="w-full h-auto object-fill cursor-pointer hover:opacity-80 duration-300"
                                    onClick={() => handleClick(id)}
                                />
                            )
                        })
                    }
                </CardTwo>
            </div>
            <div className="w-full h-auto flex justify-between">
                <Link
                    to='/blown_up'
                    className="text-white text-xl hover:opacity-80 duration-300"
                >
                    &laquo; Prev Project
                </Link>
                <Link
                    to='/tectonic'
                    className="text-white text-xl hover:opacity-80 duration-300"
                >
                    Next Project &raquo;
                </Link>
            </div>
            {
                showSwiper ? (
                    <CardSwiper
                        data={mashupData}
                        setShowSwiper={setShowSwiper}
                        selectedImageID={selectedImageID}
                    />
                ) : (
                    ''
                )
            }
        </div>
    )
}

export default Mashup;