import React, { createContext, ReactNode, useContext, useState } from 'react';

type PageNumberType = {
    pageNumber: number;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

const PageNumberContext = createContext<PageNumberType>({
    pageNumber: 1,
    setPageNumber: () => {},
});

export default function PageNumberProvider({ children }: { children: ReactNode }) {
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <PageNumberContext.Provider value={{ pageNumber, setPageNumber }}>
            {children}
        </PageNumberContext.Provider>
    );
}

export const usePageNumber = () => useContext(PageNumberContext);
