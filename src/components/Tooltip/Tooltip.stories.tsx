import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';
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

// ── Coverage-improving stories ───────────────────────────────────────────────

// Play: hover → wait for show timeout → unhover.
// Covers: show callback, setTimeout inner fn, computePosition('top'), setVisible,
//         hide callback, clearTimeout, onMouseEnter, onMouseLeave handlers.
export const ShowOnHover: Story = {
  render: () => (
    <div style={{ padding: '80px' }}>
      <Tooltip content="Hover tooltip" placement="top" delay={0}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button', { name: 'Hover me' });
    await userEvent.hover(btn);
    // Allow the 0ms setTimeout to fire before unhovering
    await new Promise<void>((r) => setTimeout(r, 50));
    await userEvent.unhover(btn);
  },
};

// Play: hover each placement — covers computePosition for all 4 switch cases.
export const AllPlacementsHover: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', padding: '80px' }}>
      {(['top', 'bottom', 'left', 'right'] as const).map((p) => (
        <Tooltip key={p} content={`${p} tooltip`} placement={p} delay={0}>
          <Button>{p}</Button>
        </Tooltip>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    for (const name of ['top', 'bottom', 'left', 'right'] as const) {
      const btn = canvas.getByRole('button', { name });
      await userEvent.hover(btn);
      await new Promise<void>((r) => setTimeout(r, 50));
      await userEvent.unhover(btn);
    }
  },
};

// Play: focus → blur — covers onFocus and onBlur handlers.
export const FocusAndBlur: Story = {
  render: () => (
    <div style={{ padding: '80px', display: 'flex', gap: '24px' }}>
      <Tooltip content="Focus tooltip" placement="top" delay={0}>
        <Button>Focus me</Button>
      </Tooltip>
      <Button>Tab to here</Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tooltipBtn = canvas.getByRole('button', { name: 'Focus me' });
    tooltipBtn.focus();
    await new Promise<void>((r) => setTimeout(r, 50));
    // Tab away to trigger blur → hide
    await userEvent.tab();
  },
};

// Play: hover then press Escape — covers the onKeyDown handler (Escape → hide).
export const EscapeHide: Story = {
  render: () => (
    <div style={{ padding: '80px' }}>
      <Tooltip content="Press Escape to hide" placement="top" delay={0}>
        <Button>Hover then Escape</Button>
      </Tooltip>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button', { name: 'Hover then Escape' });
    await userEvent.hover(btn);
    await new Promise<void>((r) => setTimeout(r, 50));
    await userEvent.keyboard('{Escape}');
  },
};

// Covers the children.props.onMouseEnter?.(e) truthy branch by providing a
// child that already has onMouseEnter/onMouseLeave/onFocus/onBlur handlers.
export const WithPassthroughHandlers: Story = {
  render: () => (
    <div style={{ padding: '80px' }}>
      <Tooltip content="Passthrough" placement="bottom" delay={0}>
        <Button
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          onFocus={() => {}}
          onBlur={() => {}}
        >
          Has handlers
        </Button>
      </Tooltip>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button', { name: 'Has handlers' });
    await userEvent.hover(btn);
    await new Promise<void>((r) => setTimeout(r, 50));
    await userEvent.unhover(btn);
  },
};
