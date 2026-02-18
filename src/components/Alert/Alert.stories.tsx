import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Playground: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational message for the user.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '480px' }}>
      <Alert variant="info">Your account settings have been updated.</Alert>
      <Alert variant="success">Payment processed successfully.</Alert>
      <Alert variant="warning">Your subscription expires in 3 days.</Alert>
      <Alert variant="error">Failed to save changes. Please try again.</Alert>
    </div>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '480px' }}>
      <Alert variant="success" title="Changes saved">
        Your profile has been updated successfully.
      </Alert>
      <Alert variant="error" title="Something went wrong">
        We could not process your request. Please try again later.
      </Alert>
    </div>
  ),
};

export const Dismissible: Story = {
  render: () => {
    const [alerts, setAlerts] = useState<string[]>(['info', 'success', 'warning', 'error']);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '480px' }}>
        {alerts.length === 0 && (
          <span style={{ fontFamily: 'var(--font-family-base)', color: 'var(--color-text-muted)', fontSize: '14px' }}>
            All alerts dismissed.
          </span>
        )}
        {alerts.includes('info') && (
          <Alert variant="info" onClose={() => setAlerts((a) => a.filter((x) => x !== 'info'))}>
            Informational alert — dismiss me.
          </Alert>
        )}
        {alerts.includes('success') && (
          <Alert variant="success" onClose={() => setAlerts((a) => a.filter((x) => x !== 'success'))}>
            Success alert — dismiss me.
          </Alert>
        )}
        {alerts.includes('warning') && (
          <Alert variant="warning" onClose={() => setAlerts((a) => a.filter((x) => x !== 'warning'))}>
            Warning alert — dismiss me.
          </Alert>
        )}
        {alerts.includes('error') && (
          <Alert variant="error" onClose={() => setAlerts((a) => a.filter((x) => x !== 'error'))}>
            Error alert — dismiss me.
          </Alert>
        )}
      </div>
    );
  },
};
