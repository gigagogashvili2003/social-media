import { FC } from '@/types';
import React from 'react';
import { PasswordIconWrapper } from './svgStyled/Svg-styles';

interface IProps {
    style?: React.CSSProperties;
}

const PasswordIcon: FC<IProps> = ({ style }) => {
    return (
        <PasswordIconWrapper style={style} version="1.1" width="256" height="256" viewBox="0 0 256 256">
            <defs></defs>
            <g className="g1" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path
                    d="M 65.009 40.127 c -2.209 0 -4 -1.791 -4 -4 V 22.363 C 61.009 14.443 54.565 8 46.646 8 h -3.291 c -7.92 0 -14.363 6.443 -14.363 14.363 v 13.764 c 0 2.209 -1.791 4 -4 4 s -4 -1.791 -4 -4 V 22.363 C 20.991 10.032 31.023 0 43.354 0 h 3.291 c 12.331 0 22.363 10.032 22.363 22.363 v 13.764 C 69.009 38.336 67.218 40.127 65.009 40.127 z"
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                />
                <path
                    d="M 68.483 32.127 H 21.517 c -5.468 0 -9.917 4.448 -9.917 9.916 v 38.041 c 0 5.468 4.449 9.916 9.917 9.916 h 46.967 c 5.468 0 9.916 -4.448 9.916 -9.916 V 42.043 C 78.399 36.576 73.951 32.127 68.483 32.127 z M 55.36 74.118 c 0 0.46 -0.373 0.833 -0.833 0.833 H 35.473 c -0.46 0 -0.833 -0.373 -0.833 -0.833 v -4.208 c 0 -4.133 3.1 -7.57 7.088 -8.121 c -1.869 -1.121 -3.13 -3.162 -3.13 -5.488 v -3.225 c 0 -3.521 2.881 -6.402 6.402 -6.402 s 6.402 2.881 6.402 6.402 v 3.225 c 0 2.326 -1.261 4.367 -3.13 5.488 c 3.988 0.551 7.088 3.987 7.088 8.121 V 74.118 z"
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                />
            </g>
        </PasswordIconWrapper>
    );
};

export default PasswordIcon;
