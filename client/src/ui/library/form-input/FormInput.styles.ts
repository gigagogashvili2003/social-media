import styled from 'styled-components';

export const FormInputWrapper = styled.div<{ margin?: string; padding?: string }>`
    width: 100%;
    position: relative;
    margin: ${p => p.margin};
    padding: ${p => p.padding};
`;

export const ErrorMessage = styled.span`
    position: absolute;
    bottom: 9px;
    font-size: 11px;
    color: ${p => p.theme.RED};
`;
