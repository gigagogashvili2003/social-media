import { FC } from '@/types';
import React from 'react';
import Container from './Container';

const BlankLayout: FC = props => {
    const { children } = props;

    return <Container>{children}</Container>;
};

export default BlankLayout;
