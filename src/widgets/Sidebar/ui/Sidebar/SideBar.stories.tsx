import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {Sidebar} from "./Sidebar";
import {ThemeDecorator} from "../../../../shared/config/storyBook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../../app/providers/ThemeProvider";


const meta = {
    title: 'widgets/SideBar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
    args: { },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)]
};



export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};

