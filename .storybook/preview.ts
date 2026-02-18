import type { Preview } from '@storybook/react';
import '../src/styles/fonts.css';
import '../src/tokens/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white',       value: '#ffffff' },
        { name: 'light beige', value: '#f4f3e8' },
        { name: 'beige',       value: '#e6dcc8' },
        { name: 'human pink',  value: '#efd6d3' },
        { name: 'dark',        value: '#1e1e24' },
        { name: 'brand blue',  value: '#2c28ec' },
      ],
    },
  },
};

export default preview;
