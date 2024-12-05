import { Link } from "react-router-dom";
import data from "../data.json";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useUIState } from "../providers/UIStateProvider";

const Drawer = () => {

    const { isShow, setIsShow, setIsNavShowing } = useUIState();

    const hideDrawer = () => {
        setIsNavShowing(false);
        setIsShow(false);
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
                                data.dropDownPaths.map(({ path, name }, index) => {
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