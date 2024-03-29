import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;
export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    {
      value: 'tab 1',
      content: 'tab 1 content',
    },
    {
      value: 'tab 2',
      content: 'tab 2 content',
    },
    {
      value: 'tab 3',
      content: 'tab 3 content',
    },
  ],
  value: 'tab 3',
  onTabClick: action('onTabClick'),
};
