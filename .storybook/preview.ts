import type { Preview } from '@storybook/react-vite';
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
      options: {
        white: { name: 'white',       value: '#ffffff' },
        light_beige: { name: 'light beige', value: '#f4f3e8' },
        beige: { name: 'beige',       value: '#e6dcc8' },
        human_pink: { name: 'human pink',  value: '#efd6d3' },
        dark: { name: 'dark',        value: '#1e1e24' },
        brand_blue: { name: 'brand blue',  value: '#2c28ec' }
      }
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },

  initialGlobals: {
    backgrounds: {
      value: 'white'
    }
  }
};

export default preview;
