import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dropDownPaths } from "../data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Drawer = ({ setIsNavShowing }) => {

    const [isShow, setIsShow] = useState(false);

    const hideDrawer = () => {
        setIsNavShowing(false);
    }

    return (
        <>
            <Link to='/' className="text-5xl font-bold" onClick={hideDrawer}>Home</Link>
            <div>
                <Link to='/projects' className="text-4xl font-bold" onClick={hideDrawer}>
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
                        <ul className="w-full h-auto grid gap-2 my-3 text-xl font-semibold">
                            {
                                dropDownPaths.map(({ path, name }, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            to={path}
                                            className="pl-5"
                                            onClick={hideDrawer}
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
            <Link to='/info' className="text-5xl font-bold" onClick={hideDrawer}>info</Link>
        </>
    )
}

export default Drawer;