import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
  args: {
    label: 'Option A',
    name: 'playground',
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [value, setValue] = useState('a');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Radio
          label="Option A"
          name="group"
          value="a"
          checked={value === 'a'}
          onChange={() => setValue('a')}
        />
        <Radio
          label="Option B"
          name="group"
          value="b"
          checked={value === 'b'}
          onChange={() => setValue('b')}
        />
        <Radio
          label="Option C"
          name="group"
          value="c"
          checked={value === 'c'}
          onChange={() => setValue('c')}
        />
        <span
          style={{
            fontSize: '12px',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-family-base)',
            marginTop: '4px',
          }}
        >
          Selected: {value}
        </span>
      </div>
    );
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio label="Unchecked" name="states" />
      <Radio label="Checked" name="states" defaultChecked />
      <Radio label="Disabled unchecked" disabled name="states-d" />
      <Radio label="Disabled checked" disabled defaultChecked name="states-d" />
      <Radio label="Error state" error name="states-e" />
    </div>
  ),
};
