import type { Meta, StoryObj } from '@storybook/react-webpack5';
import {ThemeButton} from "./Button";
import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Secondary: Story = {
    args: {
        children: 'button',
        theme: ThemeButton.CLEAR
    },
};

export const Primary: Story = {
    args: {
        children: 'button',
        theme: ThemeButton.OUTLINE
    },
};


