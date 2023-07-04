import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;
const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;
export const Normal = Template.bind({});
Normal.args = {
  item: {
    id: '1',
    title: 'title',
    description: 'description',
  },
};

export const WithLink = Template.bind({});
WithLink.args = {
  item: {
    id: '1',
    title: 'Item with link',
    description: 'click on me, I will open google for you',
    href: 'https://www.google.com',
  },
};
