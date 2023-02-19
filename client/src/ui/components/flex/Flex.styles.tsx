import styled, { css } from 'styled-components';
import { IFlexProps } from './Flex';

export const FlexWrapper = styled.div<IFlexProps>`
    width: 100%;
    display: flex;
    flex-direction: ${p => p.flexDirection};
    justify-content: ${p => p.justifyContent};
    align-items: ${p => p.alignItems};
    flex-wrap: ${p => p.flexWrap};
    margin: ${p => p.margin};
    padding: ${p => p.padding};

    ${({ columnGap }) =>
        columnGap &&
        css`
            column-gap: ${columnGap};
        `}
    ${({ rowGap }) =>
        rowGap &&
        css`
            row-gap: ${rowGap};
        `}
    ${({ gap }) =>
        gap &&
        css`
            gap: ${gap};
        `}
`;
