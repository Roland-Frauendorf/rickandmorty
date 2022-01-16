import React, { createContext, ReactNode, useContext, useState } from 'react';

type PaginationLoadType = {
    paginationLoading: boolean;
    setPaginationLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const PaginationLoadContext = createContext<PaginationLoadType>({
    paginationLoading: true,
    setPaginationLoading: () => {},
});

export default function PaginationLoadProvider({ children }: { children: ReactNode }) {
    const [paginationLoading, setPaginationLoading] = useState(true);

    return (
        <PaginationLoadContext.Provider
            value={{
                paginationLoading,
                setPaginationLoading,
            }}
        >
            {children}
        </PaginationLoadContext.Provider>
    );
}

export const usePaginationLoad = () => useContext(PaginationLoadContext);
