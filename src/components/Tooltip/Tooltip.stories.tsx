import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    delay: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    delay: 200,
  },
};

export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', padding: '48px' }}>
      <Tooltip content="Appears above" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Appears below" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Appears to the left" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Appears to the right" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tooltip content="Instant (0ms delay)" delay={0} placement="top">
        <Button variant="outline">No delay</Button>
      </Tooltip>
      <Tooltip content="500ms delay" delay={500} placement="top">
        <Button variant="outline">500ms delay</Button>
      </Tooltip>
    </div>
  ),
};
