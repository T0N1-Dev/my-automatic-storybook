import type { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

const meta: Meta<typeof MyLabel> = {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    customColor: { control: 'color' },
  },
  tags: ['autodocs'], 
};

export default meta;

type Story = StoryObj<typeof MyLabel>;

export const Basic: Story = {
  args: {
    label: 'Etiqueta básica',
    size: 'normal',
    allCaps: false
  }
};

export const AllCaps: Story = {
  args: {
    label: 'Capital Text',
    size: 'h1',
    allCaps: true
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secundary',
    size: 'h2',
    color: 'secondary'
  }
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary',
    size: 'normal',
    color: 'tertiary'
  }
};

export const CustomFontColor: Story = {
    args: {
      label: 'FontColor',
      size: 'h1',
      customColor: "#57ff0f"
    }
  };

export const CustomBackgroundColor: Story = {
    args: {
      label: 'BackgroundColor',
      size: 'h1',
      backgroundColor: "black"
    }
  };
