import ColorPropsProvider, { useColorProps } from './props/context.props.colors';
import PageNumberProvider, { usePageNumber } from './pagination/context.pagination.number';
import PaginationLoadProvider, { usePaginationLoad } from './pagination/context.pagination.load';
import ErrorProvider, { useErrorState } from './state/context.state.error';
import CharactersProvider, { useCharacters } from './characters/context.characters';
import CharactersLoadingProvider, { useCharactersLoad } from './characters/context.characters.load';
import DimensionsPropsProvider, { useDimensionsProps } from './props/context.props.dimensions';

export {
    ColorPropsProvider,
    PageNumberProvider,
    PaginationLoadProvider,
    ErrorProvider,
    CharactersProvider,
    CharactersLoadingProvider,
    DimensionsPropsProvider,
};

export {
    useColorProps,
    usePageNumber,
    usePaginationLoad,
    useErrorState,
    useCharacters,
    useCharactersLoad,
    useDimensionsProps,
};
