import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const colors = {
  brand: {
    50: { value: '#23263a' },
    100: { value: '#1a1d2b' },
    200: { value: '#181a25' },
    300: { value: '#151720' },
    400: { value: '#12141b' },
    500: { value: '#10121a' },
    600: { value: '#0d0e13' },
    700: { value: '#0a0b0f' },
    800: { value: '#08090c' },
    900: { value: '#05060a' },
  },
  accent: {
    500: { value: '#ffb86b' },
    600: { value: '#ff9800' },
    700: { value: '#ff6f00' },
  },
  text: {
    primary: { value: '#e0e0e0' },
    secondary: { value: '#a0a0b0' },
    muted: { value: '#6c6f7a' },
  },
  bg: {
    main: { value: '#10121a' },
    elevated: { value: '#181a25' },
    card: { value: '#181a25' },
    hover: { value: '#23263a' },
  },
};

const config = defineConfig({
  theme: {
    tokens: {
      colors,
      breakpoints: {
        sm: { value: '480px' },
        md: { value: '768px' },
        lg: { value: '992px' },
        xl: { value: '1280px' },
        '2xl': { value: '1536px' },
      },
    },
    semanticTokens: {
      colors: {
        text: {
          default: { value: '{text.primary}' },
          _dark: { value: '{text.primary}' },
        },
        bg: {
          default: { value: '{bg.main}' },
          _dark: { value: '{bg.main}' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
