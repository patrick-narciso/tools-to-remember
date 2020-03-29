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

      grey: {
        base: '#FAFAFA',
      },

      green: {
        dark: '#15573F',
        light: '#7BAF9E',
      },

      coral: {
        base: '#FD9872',
      },

      background: {
        base: '#000000',
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
