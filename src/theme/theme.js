import {
  extendTheme,
  theme as base,
  withDefaultVariant,
} from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';

const squareBorderRadius = {
  sizes: {
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '##f6fcee',
        100: '#e2f4c8',
        200: '#cbec9e',
        300: '#b2e26e',
        400: '#94d736',
        500: '#75c800',
        600: '#68b300',
        700: '#599900',
        800: '#477900',
        900: '#294700',
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Input: { ...squareBorderRadius },
      Select: { ...squareBorderRadius },
      Button: {
        variants: {
          primary: props => ({
            rounded: 'none',
            color: mode('white', 'gray.800')(props),
            backgroundColor: mode('brand.500', 'brand.300')(props),

            _focus: {
              ring: 2,
              ringColor: mode('brand.600', 'brand.400')(props),
            },

            _hover: {
              backgroundColor: mode('brand.600', 'brand.400')(props),
            },

            _active: {
              backgroundColor: mode('brand.700', 'brand.500')(props),
            },
          }),
        },
      },
    },
  },
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select'],
  })
);

export default theme;
