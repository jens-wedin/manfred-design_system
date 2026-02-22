import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';
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

// ── Coverage-improving stories ───────────────────────────────────────────────

// Renders the portal immediately — covers useEffect (escape listener + focus),
// body scroll lock, backdrop, panel, header, body rendering.
export const Open: Story = {
  render: () => (
    <Modal isOpen={true} onClose={() => {}} title="Open Modal">
      <p style={{ margin: 0 }}>This modal is open by default.</p>
    </Modal>
  ),
};

// footer && branch
export const OpenWithFooter: Story = {
  render: () => (
    <Modal
      isOpen={true}
      onClose={() => {}}
      title="With Footer"
      footer={
        <>
          <Button variant="ghost">Cancel</Button>
          <Button variant="brand">Confirm</Button>
        </>
      }
    >
      <p style={{ margin: 0 }}>Modal with a footer section.</p>
    </Modal>
  ),
};

// title-less header (renders header div but not the <h2> or aria-labelledby)
export const OpenNoTitle: Story = {
  render: () => (
    <Modal isOpen={true} onClose={() => {}}>
      <p style={{ margin: 0 }}>Modal without a title.</p>
    </Modal>
  ),
};

// size="sm" branch
export const OpenSmall: Story = {
  render: () => (
    <Modal isOpen={true} onClose={() => {}} title="Small Modal" size="sm">
      <p style={{ margin: 0 }}>Small size modal.</p>
    </Modal>
  ),
};

// size="lg" branch
export const OpenLarge: Story = {
  render: () => (
    <Modal isOpen={true} onClose={() => {}} title="Large Modal" size="lg">
      <p style={{ margin: 0 }}>Large size modal.</p>
    </Modal>
  ),
};

// closeOnEscape={false} — covers the early-return branch in the escape useEffect
export const NoEscapeClose: Story = {
  render: () => (
    <Modal isOpen={true} onClose={() => {}} title="Escape Disabled" closeOnEscape={false}>
      <p style={{ margin: 0 }}>Pressing Escape will not close this modal.</p>
    </Modal>
  ),
};

// closeOnBackdrop={false} — covers the undefined onClick/onKeyDown on the backdrop
export const NoBackdropClose: Story = {
  render: () => (
    <Modal isOpen={true} onClose={() => {}} title="Backdrop Disabled" closeOnBackdrop={false}>
      <p style={{ margin: 0 }}>Clicking the backdrop will not close this modal.</p>
    </Modal>
  ),
};

// Play: click the X button — covers the close button's onClick and onClose callback
export const CloseViaButton: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return open ? (
      <Modal isOpen={true} onClose={() => setOpen(false)} title="Click X to Close">
        <p style={{ margin: 0 }}>Click the X button to close.</p>
      </Modal>
    ) : (
      <span>Modal closed</span>
    );
  },
  play: async ({ canvasElement }) => {
    const body = within(document.body);
    const closeBtn = await body.findByRole('button', { name: 'Close dialog' });
    await userEvent.click(closeBtn);
    const canvas = within(canvasElement);
    await canvas.findByText('Modal closed');
  },
};

// Play: press Escape — covers the keydown event handler added by useEffect
export const CloseViaEscape: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return open ? (
      <Modal isOpen={true} onClose={() => setOpen(false)} title="Press Escape">
        <p style={{ margin: 0 }}>Press Escape to close this modal.</p>
      </Modal>
    ) : (
      <span>Modal closed</span>
    );
  },
  play: async ({ canvasElement }) => {
    const body = within(document.body);
    await body.findByRole('dialog');
    await userEvent.keyboard('{Escape}');
    const canvas = within(canvasElement);
    await canvas.findByText('Modal closed');
  },
};

// Play: Tab key — covers handleKeyDown focus trap (forward and reverse wrapping)
export const FocusTrap: Story = {
  render: () => (
    <Modal
      isOpen={true}
      onClose={() => {}}
      title="Focus Trap"
      footer={<Button>OK</Button>}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input type="text" placeholder="First field" style={{ padding: '8px' }} />
        <input type="text" placeholder="Second field" style={{ padding: '8px' }} />
      </div>
    </Modal>
  ),
  play: async () => {
    // Tab through all focusable elements until the trap wraps forward
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab(); // wraps forward: last → first
    // Shift+Tab to trigger the reverse wrap: first → last
    await userEvent.tab({ shift: true });
  },
};
