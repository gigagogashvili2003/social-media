import ColorOpacityHex from './color-hex';

const common = {
    // COLORS
    PRIMARY: '#9c95ff',
    PRIMARY_ACTIVE: '#8881e0',
    PRIMARY_BLUE: '#101685',
    PRIMARY_ORANGE: '#FF8A5C',
    PRIMARY_CYAN: '#48B3C3',
    BLACK: '#04051F',
    SUPPORT_BLUE: '#0047FD',
    RED: '#FF544A',
    FORM_ERROR_BG: `#FF544A${ColorOpacityHex[20]}`,
    GREEN: '#3CA857',
    YELLOW: '#F5B308',
    // THEME
    BG_COLOR: '#d3cce3ad',
    HEADER_BG: '#f1f1f1',
    SIDEBAR_BG: '#fff',
    BLOCK_BG: '#fff',
    MODAL_BG: '#fff',
    SCROLLBAR_COLOR: '#d1d1de',
    TABLE_COLOR: '#43435f',
    TABLE_SECONDARY_COLOR: '#79798e',
    BLOCK_PADDING_SM: '15px',
    BLOCK_PADDING: '47px',
    MAX_CONTAINER_WIDTH: '1800px',
    // BTN
    BTN_HEIGHT: '54px',
    BTN_COLOR: '#fff',
    BTN_BG_COLOR: '#9c95ff',
    BTN_BG_COLOR_ACTIVE: '#8881e0',
    BTN_NORMAL_COLOR: '#9c95ff',
    BTN_NORMAL_COLOR_ACTIVE: '#9c95ff',
    BTN_NORMAL_BG_COLOR: '#E5F4FF',
    BTN_NORMAL_BG_COLOR_ACTIVE: '#D3ECFF',
    BTN_BORDER_RADIUS: '0',
    // FONT
    DEFAULT_FONT: 'Quicksand, Arial, Helvetica-neue',
    DEFAULT_FONT_SIZE: '16px',
    DEFAULT_LINE_HEIGHT: '22.7px',
    DEFAULT_FONT_COLOR: '#04051F',
    DEFAULT_FONT_COLOR_ACTIVE: '#2590F7',
    SECONDARY_FONT_COLOR: '#04051F',
    // INPUT
    INPUT_HEIGHT: '54px',
    INPUT_BG_COLOR: 'transparent',
    INPUT_LABEL_COLOR: '#79798E',
    INPUT_LABEL_BG_COLOR: '#fff',
    INPUT_BORDER_COLOR: '#DBDBE8',
    INPUT_BORDER_COLOR_FOCUSED: '#2590F7',
    INPUT_BORDER_RADIUS: '0',
    INPUT_TRANSITION: 'all 0.2',
    INPUT_LETTER_SPACING: '1px',
    INPUT_PLACEHOLDER_COLOR: '#79798E',
    INPUT_DISABLED_COLOR: '#616160',
    INPUT_DISABLED_BACKGROUN_DCOLOR: 'rgb(84, 84, 84)',
    INPUT_DISABLED_OPACITY: '.4',
    INPUT_ERROR_BORDER_COLOR: '#f44336bd',
    INPUT_ERROR_BACKGROUND_COLOR: 'transparent',
    INPUT_FONT: 'Quicksand, Arial,  Helvetica-neue',
    INPUT_FONT_SIZE: '16px',
    INPUT_LINE_HEIGHT: '18px',
    // DROPDOWN
    DROPDOWN_ITEM_BACKGROUND_COLOR: 'transparent',
    DROPDOWN_BACKGROUND_COLOR: '#fff',
    DROPDOWN_BACKGROUND_COLOR_HOVER: 'transparent',
    DROPDOWN_ITEM_COLOR: '#04051F',
    // SVG
    SVG_FILL: '#79798e',
    SVG_FILL_ACTIVE: '#9c95ff',
};

export const themes = {
    light: {
        ...common,
        type: 'light',
    },
    dark: {
        ...common,
        type: 'dark',
        BG_COLOR: '#243b55',
        HEADER_BG: '#b4cee8',
        DEFAULT_FONT_COLOR: '#fff',
    },
};

export type ITheme = (typeof themes)['light'];
export type IThemeMode = 'light' | 'dark';

export const defaultTheme: IThemeMode = 'light';
