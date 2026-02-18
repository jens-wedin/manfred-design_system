import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
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
