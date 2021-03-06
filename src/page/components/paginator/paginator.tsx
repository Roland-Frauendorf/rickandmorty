import React, { useEffect } from 'react';
import { Pagination as AntdPagination } from 'antd';
import { useQuery } from '@apollo/client';
import PaginatorLayout from './paginator.style';
import { PaginationProps } from './paginator.types';
import { quantitiesInfoQuery } from '../../../GraphQL/queries';
import { QuantitiesQueryResult } from '../../../GraphQL/queries.types';
import { useColorProps, useErrorState, usePageNumber, usePaginationLoad } from '../../../context';

/**
 * Com os dados prontos, cria-se o componente de paginação.
 */
const pagination: React.FC<PaginationProps> = ({ data, setPageNumber }) => {
    if (!data) return null;

    const quantityPerPage = Math.ceil(data.characters.info.count / data.characters.info.pages);

    return (
        <AntdPagination
            defaultCurrent={1}
            total={data.characters.info.count}
            showQuickJumper
            defaultPageSize={quantityPerPage}
            showTotal={(total) => `Total ${total} items`}
            showSizeChanger={false}
            onChange={(e) => setPageNumber(e)}
        />
    );
};

/**
 * Componente para paginação da página de acordo
 * com os dados de personagens que serão carregados.
 */
function Paginator() {
    const { contrastColor } = useColorProps();
    const { data, loading, error }: QuantitiesQueryResult = useQuery(quantitiesInfoQuery);
    const { setPageNumber } = usePageNumber();
    const { setPaginationLoading } = usePaginationLoad();
    const { setLoadError } = useErrorState();

    useEffect(() => {
        // Altera a flag de carregamento da paginação de acordo com o respectivo objeto no resultado da query.
        setPaginationLoading(loading);
    }, [loading, setPaginationLoading]);

    useEffect(() => {
        // Altera a flag de erro de carregamento caso ocorra um erro no carregamento dos dados da paginação.
        if (error) setLoadError(true);
    }, [error, setLoadError]);

    return (
        <PaginatorLayout.Container contrastColor={contrastColor}>
            <PaginatorLayout.Content>{pagination({ data, setPageNumber })}</PaginatorLayout.Content>
        </PaginatorLayout.Container>
    );
}

export default Paginator;
