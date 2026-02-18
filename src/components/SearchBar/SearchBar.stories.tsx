import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Playground: Story = {
  args: {
    size: 'md',
    placeholder: 'Search…',
  },
};

export const WithClear: Story = {
  render: () => (
    <SearchBar defaultValue="manfred design" style={{ width: '280px' } as React.CSSProperties} />
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '280px' }}>
      <SearchBar size="sm" placeholder="Small search" />
      <SearchBar size="md" placeholder="Medium search" />
      <SearchBar size="lg" placeholder="Large search" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <SearchBar disabled defaultValue="disabled" style={{ width: '280px' } as React.CSSProperties} />,
};

export const Controlled: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    const [lastSearch, setLastSearch] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={setLastSearch}
          onClear={() => setQuery('')}
          placeholder="Type and press Enter…"
          fullWidth
        />
        {lastSearch && (
          <span
            style={{
              fontSize: '12px',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-family-base)',
            }}
          >
            Last search: "{lastSearch}"
          </span>
        )}
      </div>
    );
  },
};
