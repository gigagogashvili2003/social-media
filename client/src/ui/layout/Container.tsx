import { FC } from '@/types';
import React from 'react';
import { ContainerWrapper } from './Layout.styles';

const Container: FC = props => {
    const { children } = props;

    return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
