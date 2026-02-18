import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'padded' },
  argTypes: {
    separator: { control: 'select', options: ['chevron', 'slash'] },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Playground: Story = {
  args: {
    separator: 'chevron',
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Shoes' },
    ],
  },
};

export const WithSlashSeparator: Story = {
  args: {
    separator: 'slash',
    items: [
      { label: 'Home', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Design Systems' },
    ],
  },
};

export const LongPath: Story = {
  args: {
    separator: 'chevron',
    items: [
      { label: 'Home', href: '#' },
      { label: 'Dashboard', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Account', href: '#' },
      { label: 'Security' },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Home' }],
  },
};
