import { FC } from '@/types';
import React from 'react';
import { EmailIconWrapper } from './svgStyled/Svg-styles';

interface ISvgProps {
    maxWidth?: string;
    maxHeight?: string;
    color?: string;
}

const EmailIcon: FC<ISvgProps> = props => {
    const { maxWidth, maxHeight, color } = props;

    return (
        <EmailIconWrapper width={maxWidth} height={maxHeight} viewBox="0 0 256 256" color={color}>
            <defs></defs>
            <g className="g1" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path
                    d="M 45 51.815 l 45 -33.87 v -1.967 c 0 -2.03 -1.646 -3.676 -3.676 -3.676 H 3.676 C 1.646 12.302 0 13.948 0 15.978 v 1.967 L 45 51.815 z"
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                />
                <path
                    d="M 47.405 60.019 c -0.712 0.536 -1.559 0.804 -2.405 0.804 s -1.693 -0.268 -2.405 -0.804 L 0 27.958 v 46.064 c 0 2.03 1.646 3.676 3.676 3.676 h 82.648 c 2.03 0 3.676 -1.646 3.676 -3.676 V 27.958 L 47.405 60.019 z"
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                />
            </g>
        </EmailIconWrapper>
    );
};

export default EmailIcon;
