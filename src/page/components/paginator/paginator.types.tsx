import React from 'react';
import { QueryQuantitiesData } from '../../../GraphQL/queries.types';

export type PaginationProps = {
    data: QueryQuantitiesData | undefined;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};
