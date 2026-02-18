import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    title: 'Modal Title',
    size: 'md',
    children: (
      <p style={{ margin: 0 }}>
        This is the modal body content. You can place any content here including forms, media, or plain text.
      </p>
    ),
  },
};

export const Sizes: Story = {
  render: () => {
    const [open, setOpen] = useState<'sm' | 'md' | 'lg' | null>(null);
    return (
      <div style={{ display: 'flex', gap: '12px' }}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Button key={size} variant="outline" onClick={() => setOpen(size)}>
            {size.toUpperCase()} Modal
          </Button>
        ))}
        <Modal
          isOpen={open !== null}
          onClose={() => setOpen(null)}
          title={`${(open ?? 'md').toUpperCase()} Modal`}
          size={open ?? 'md'}
        >
          <p style={{ margin: 0 }}>Modal content at size "{open}".</p>
        </Modal>
      </div>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open with Footer</Button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Confirm action"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="brand" onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p style={{ margin: 0 }}>
            Are you sure you want to continue? This action cannot be undone.
          </p>
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Long Content Modal</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Terms & Conditions">
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i} style={{ marginTop: 0, marginBottom: '16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          ))}
        </Modal>
      </>
    );
  },
};
