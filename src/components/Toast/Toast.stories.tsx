import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';
import { ToastContainer, useToast } from './Toast';
import { Button } from '../Button';

const meta: Meta = {
  title: 'Components/Toast',
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
  render: () => {
    const { toasts, show, dismiss } = useToast();
    return (
      <>
        <Button
          variant="brand"
          onClick={() =>
            show({
              variant: 'info',
              message: 'This is a toast notification!',
              duration: 4000,
            })
          }
        >
          Show Toast
        </Button>
        <ToastContainer toasts={toasts} onDismiss={dismiss} />
      </>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const { toasts, show, dismiss } = useToast();
    return (
      <>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button onClick={() => show({ variant: 'info', title: 'Info', message: 'Informational toast.' })}>
            Info
          </Button>
          <Button onClick={() => show({ variant: 'success', title: 'Success', message: 'Action completed!' })}>
            Success
          </Button>
          <Button onClick={() => show({ variant: 'warning', title: 'Warning', message: 'Please review.' })}>
            Warning
          </Button>
          <Button onClick={() => show({ variant: 'error', title: 'Error', message: 'Something failed.' })}>
            Error
          </Button>
        </div>
        <ToastContainer toasts={toasts} onDismiss={dismiss} />
      </>
    );
  },
};

export const AutoDismiss: Story = {
  render: () => {
    const { toasts, show, dismiss } = useToast();
    return (
      <>
        <Button
          onClick={() =>
            show({
              variant: 'success',
              message: 'Auto-dismisses in 2 seconds.',
              duration: 2000,
            })
          }
        >
          Show (2s auto-dismiss)
        </Button>
        <ToastContainer toasts={toasts} onDismiss={dismiss} />
      </>
    );
  },
};

export const Positions: Story = {
  render: () => {
    const tr = useToast();
    const tc = useToast();
    const br = useToast();
    const bc = useToast();
    return (
      <>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <Button variant="outline" size="sm" onClick={() => tr.show({ variant: 'info', message: 'Top right' })}>
            Top Right
          </Button>
          <Button variant="outline" size="sm" onClick={() => tc.show({ variant: 'success', message: 'Top center' })}>
            Top Center
          </Button>
          <Button variant="outline" size="sm" onClick={() => br.show({ variant: 'warning', message: 'Bottom right' })}>
            Bottom Right
          </Button>
          <Button variant="outline" size="sm" onClick={() => bc.show({ variant: 'error', message: 'Bottom center' })}>
            Bottom Center
          </Button>
        </div>
        <ToastContainer toasts={tr.toasts} onDismiss={tr.dismiss} position="top-right" />
        <ToastContainer toasts={tc.toasts} onDismiss={tc.dismiss} position="top-center" />
        <ToastContainer toasts={br.toasts} onDismiss={br.dismiss} position="bottom-right" />
        <ToastContainer toasts={bc.toasts} onDismiss={bc.dismiss} position="bottom-center" />
      </>
    );
  },
};

// ── Coverage-improving stories ───────────────────────────────────────────────

// Renders ToastEntry immediately — covers ToastEntry render path, useEffect timer
// setup, and the auto-dismiss timer branch (duration > 0).
export const StaticToasts: Story = {
  render: () => (
    <ToastContainer
      toasts={[
        { id: '1', variant: 'info', message: 'Informational toast' },
        { id: '2', variant: 'success', title: 'Done', message: 'Success!' },
        { id: '3', variant: 'warning', message: 'Warning toast' },
        { id: '4', variant: 'error', title: 'Error', message: 'Something failed.' },
      ]}
      onDismiss={() => {}}
    />
  ),
};

// duration: 0 → covers the `if (duration > 0)` false branch (no timer set).
export const NoDismiss: Story = {
  render: () => (
    <ToastContainer
      toasts={[{ id: '1', variant: 'info', message: 'Stays forever', duration: 0 }]}
      onDismiss={() => {}}
    />
  ),
};

// All four position CSS classes rendered at once.
export const AllPositionsStatic: Story = {
  render: () => (
    <>
      <ToastContainer
        toasts={[{ id: 'tr', variant: 'info', message: 'Top right', duration: 0 }]}
        onDismiss={() => {}}
        position="top-right"
      />
      <ToastContainer
        toasts={[{ id: 'tc', variant: 'success', message: 'Top center', duration: 0 }]}
        onDismiss={() => {}}
        position="top-center"
      />
      <ToastContainer
        toasts={[{ id: 'br', variant: 'warning', message: 'Bottom right', duration: 0 }]}
        onDismiss={() => {}}
        position="bottom-right"
      />
      <ToastContainer
        toasts={[{ id: 'bc', variant: 'error', message: 'Bottom center', duration: 0 }]}
        onDismiss={() => {}}
        position="bottom-center"
      />
    </>
  ),
};

// Play: show a toast → click Dismiss — covers the dismiss callback, the
// exiting animation state, and useToast's dismiss function.
export const DismissInteraction: Story = {
  render: () => {
    const { toasts, show, dismiss } = useToast();
    return (
      <>
        <Button
          onClick={() =>
            show({ variant: 'warning', title: 'Heads up', message: 'Click X to dismiss', duration: 0 })
          }
        >
          Show Toast
        </Button>
        <ToastContainer toasts={toasts} onDismiss={dismiss} />
      </>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Show Toast' }));
    const body = within(document.body);
    const closeBtn = await body.findByRole('button', { name: 'Dismiss alert' });
    await userEvent.click(closeBtn);
  },
};
