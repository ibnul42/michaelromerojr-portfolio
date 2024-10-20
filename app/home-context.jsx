'use client';

import React, { createContext, useContext, useState } from "react";

export const HomeContext = createContext({
    isHome: false,
    setIsHome: () => { },
});

export const useHomeContext = () => {
    const [isHome, setIsHome] = useState(false);

    return {
        isHome,
        setIsHome
    };
};

export const HomeContextProvider = ({ children }) => {
    const ctx = useHomeContext();
    return (
        <HomeContext.Provider value={ctx}>
            {children}
        </HomeContext.Provider>
    )
}
