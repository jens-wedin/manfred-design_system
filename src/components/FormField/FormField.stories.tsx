import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField } from './FormField';
import { TextInput } from '../TextInput';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Playground: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField label="Email address" htmlFor="email-play">
        <TextInput id="email-play" placeholder="you@example.com" fullWidth />
      </FormField>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField
        label="Email address"
        htmlFor="email-error"
        status="error"
        message="Please enter a valid email address."
      >
        <TextInput
          id="email-error"
          defaultValue="notanemail"
          status="error"
          fullWidth
        />
      </FormField>
    </div>
  ),
};

export const WithSuccess: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField
        label="Username"
        htmlFor="username-ok"
        status="success"
        message="Username is available!"
      >
        <TextInput
          id="username-ok"
          defaultValue="jens_wedin"
          status="success"
          fullWidth
        />
      </FormField>
    </div>
  ),
};

export const WithHint: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField
        label="Password"
        htmlFor="password-hint"
        status="hint"
        message="Must be at least 8 characters with a number."
      >
        <TextInput
          id="password-hint"
          type="password"
          placeholder="Enter password"
          fullWidth
        />
      </FormField>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div style={{ width: '320px' }}>
      <FormField label="Full name" htmlFor="fullname" required>
        <TextInput id="fullname" placeholder="Jane Doe" fullWidth />
      </FormField>
    </div>
  ),
};

export const FullForm: Story = {
  render: () => (
    <div style={{ width: '360px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <FormField label="Full name" htmlFor="ff-name" required>
        <TextInput id="ff-name" placeholder="Jane Doe" fullWidth />
      </FormField>
      <FormField
        label="Email"
        htmlFor="ff-email"
        required
        status="error"
        message="This email is already in use."
      >
        <TextInput
          id="ff-email"
          defaultValue="jane@taken.com"
          status="error"
          fullWidth
        />
      </FormField>
      <FormField
        label="Password"
        htmlFor="ff-pw"
        status="hint"
        message="At least 8 characters with a number."
      >
        <TextInput id="ff-pw" type="password" placeholder="••••••••" fullWidth />
      </FormField>
    </div>
  ),
};
