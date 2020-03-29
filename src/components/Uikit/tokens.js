import DesignSystem from 'design-system-utils';

const fontFamily = {
  system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
  sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  mono: 'Menlo, Monaco, "Courier New", monospace',
};

const designTokens = {
  type: {
    regularFontFamily: 'Source Sans Pro, sans-serif',

    sizes: {
      xs: '16px',
      s: '18px',
      base: '20px',
      xm: '24px',
      m: '26px',
      l: '30px',
      xl: '36px',
      xxl: '42px',
    },
  },

  fontFamily,
  fontFamilyBase: fontFamily.system,
  fontFamilyHeadings: fontFamily.mono,

  colors: {
    colorPalette: {
      ink: {
        base: '#170C3A',
        light: '#8F8A9B',
        lighter: '#B1ADB9',
        lightest: '#C7C4CD',
      },

      blue: {
        base: '#365DF0',
        darker: '#244AA8',
        dark: '#2F55CC',
        light: '#9AAEF7',
        lighter: '#B9C6FA',
        lightest: '#CAD6FC',
        mostLightest: '#E1E7FD',
      },

      green: {
        base: '#12DB89',
        darker: '#0E995D',
        dark: '#10B26C',
        light: '#88EDC4',
        lighter: '#B7F7D8',
        lightest: '#CFF9E6',
        mostLightest: '#E7FBF3',
      },

      red: {
        base: '#F95E5A',
        darker: '#A53F3F',
        dark: '#CC4C4C',
        light: '#FCAEAC',
        lighter: '#FCC6C5',
        lightest: '#FCD7D6',
        mostLightest: '#FEEFEE',
      },

      white: {
        base: '#FFFFFF',
        dark: '#FCFCFD',
        darker: '#F5F4F6',
        darkest: '#EBEAED',
        mostDarkest: '#DEDCE1',
      },
    },

    brand: {
      black: '#170C3A',
      white: '#FFFFFF',
      green: '#1DB954',
    },
  },

  breakpoints: {
    sm: '768px',
    xs: '415px',
    xxs: '320px',
  },
};

export default new DesignSystem(designTokens, {
  fontSizeUnit: 'rem',
});
