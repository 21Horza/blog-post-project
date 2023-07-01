import { Story } from '@storybook/react';
// eslint-disable-next-line horza-for-production/layer-imports
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
);
