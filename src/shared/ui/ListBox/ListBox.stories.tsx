import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: '/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;
const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;
export const Normal = Template.bind({});
Normal.args = {};
