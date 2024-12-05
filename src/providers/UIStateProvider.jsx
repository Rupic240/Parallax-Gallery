import { createContext, useContext, useState } from "react"

const UIStateContext = createContext();
export const useUIState = () => {
    return useContext(UIStateContext);
}

const UIStateProvider = ({ children }) => {

    const [isShow, setIsShow] = useState(false);
    const [isNavShowing, setIsNavShowing] = useState(false);
    const [isShowFooterDrop, setIsShowFooterDrop] = useState(false);

    return (
        <UIStateContext.Provider
            value={{
                isShow,
                setIsShow,
                isNavShowing,
                setIsNavShowing,
                isShowFooterDrop,
                setIsShowFooterDrop
        }}>
            {children}
        </UIStateContext.Provider>
    )
}

export default UIStateProvider