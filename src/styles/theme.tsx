import { extendTheme, theme as base } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#5D69D5',
      100: '#4D5AD1',
      200: '#3C4BCD',
      300: '#3241C3',
      400: '#2E3BB2',
      500: '#2A36A2',
      600: '#263092',
      700: '#212b82',
      800: '#1C246C',
      900: '#192061',
    },
  },
  fonts: {
    heading: `Inter, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
    mono: `Inter, ${base.fonts?.mono}`,
  },
});
