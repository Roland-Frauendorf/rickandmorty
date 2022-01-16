import ColorPropsProvider, { useColorProps } from './props/context.props.colors';
import PageNumberProvider, { usePageNumber } from './pagination/context.pagination.number';
import PaginationLoadProvider, { usePaginationLoad } from './pagination/context.pagination.load';
import ErrorProvider, { useErrorState } from './state/context.state.error';

export { ColorPropsProvider, PageNumberProvider, PaginationLoadProvider, ErrorProvider };

export { useColorProps, usePageNumber, usePaginationLoad, useErrorState };
