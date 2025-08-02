import {createTheme} from '@shopify/restyle';

const palette = {
  primary: '#074C4E',
  primaryLight: '#EAF6F6',
  secondary: '#F86F2D',
  secondaryLight: '#FAE6DD',
  success: '#4ABC86',
  successLight: '#D8FFEC',
  error: '#EA3838',
  errorLight: '#FBECEC',

  black: '#000000',
  white: '#FFFFFF',

  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
};

export const theme = createTheme({
  colors: {
    ...palette,
    buttonPrimary: palette.primary,
    primaryContrast: palette.white,
    background: palette.white,
    backgroundContrast: palette.black,
    disabled: palette.gray4,
    disabledContrast: palette.gray2,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s20: 20,
    s48: 48,
  },
  borderRadii: {
    r8: 8,
    r12: 12,
    r16: 16,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
