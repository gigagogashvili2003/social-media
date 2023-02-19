import { FC } from '@/types';
import React from 'react';
import { FlexWrapper } from './Flex.styles';

export interface IFlexProps {
    alignItems?: string;
    flexDirection?: string;
    justifyContent?: string;
    flexWrap?: string;
    style?: React.CSSProperties;
    rowGap?: string;
    columnGap?: string;
    gap?: string;
    padding?: string;
    margin?: string;
    className?: string;
}

const Flex: FC<IFlexProps> = props => {
    const { children, flexDirection = 'row', justifyContent = 'flex-start', alignItems = 'normal', flexWrap = 'nowrap', ...rest } = props;

    return (
        <FlexWrapper flexDirection={flexDirection} justifyContent={justifyContent} alignItems={alignItems} flexWrap={flexWrap} {...rest}>
            {children}
        </FlexWrapper>
    );
};

export default Flex;
