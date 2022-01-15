import React, { ReactNode } from 'react';
import ColorPropsProvider from './context/props/context.props.colors';

const providers: React.FC = ({ children }: { children?: ReactNode }) => {
    return <ColorPropsProvider>{children}</ColorPropsProvider>;
};

export default providers;
