## Run the project

```
npm install - install dependancies
npm run start:dev or npm run start:dev:vite - lauch server + frontend project
```

----

## Scripts

- `npm run start` - Run frontend project on webpack dev server
- `npm run start:vite` - Run frontend project on vite
- `npm run start:dev` - Run frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Run frontend project on vite + backend
- `npm run start:dev:server` - Run backend server
- `npm run build:prod` - Build in production mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss style files with linter
- `npm run lint:scss:fix` - Fix scss style files with linter
- `npm run test:unit` - Run screenshot tests with jest
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run est:ui:report` - Generate full report for screenshot tests
- `npm run test:ui:json` - Generate json for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - Run storybook
- `npm run storybook:build` - Build storybook
- `npm run prepare` - Precommit hooks
- `npm run generate:slice` - Script for generation FSD slices

----

## Project architecture

Project is designed according to Feature Sliced Design methodology

Documentation link - [feature sliced design](https://feature-sliced.design/)

----

## Working with translations

The project uses a library i18next for working with translations. Translation files are stored in public/locales.

For comfortable work, we recommend installing the plugin for vscode/webstorm

i18next documentation - [i18next](https://www.i18next.com/)

----

## Tests

The project uses four types of tests:
1) Unit tests with jest - `npm run test:unit`
2) Tests for components with React testing library - `npm run test:unit`
3) Screenshot tests with loki - `npm run test:ui`
4) e2e tests with Cypress - `npm run test:e2e`

Read more about tests - [testing documentation](/docs/tests.md)

----

## Linting

The project uses eslint to check typescript code and stylelint to check files with styles.

Also for strict control of the main architectural principles
own eslint plugin *eslint-plugin-ulbi-tv-plugin* is used,
which contains 3 rules
1) path-checker - prohibits the use of absolute imports within one module
2) layer-imports - checks the correct use of layers in terms of FSD
    (e.g. widgets cannot be used in features and entities)
3) public-api-imports - allows import from other modules only from public api. Has auto fix

##### Running linters
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss style files with linter
- `npm run lint:scss:fix` - Fix scss style files with linter

----
## Storybook

The project describes story cases for each component.
Server requests are mocked using storybook-addon-mock.

A file with stories is created next to the component with the extension .stories.tsx

You can start the storybook with the command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Project configuration

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

All configuration is stored in /config
- /config/babel-babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplification of writing code\report generation, etc.

----

## CI pipeline и pre commit hooks

The github actions configuration is located in /.github/workflows.
In ci, all types of tests, project and storybook assembly, linting are run.

In precommit hooks, we check the project with linters, the config is in /.husky

----

### Working with data

Interaction with data is carried out using the redux toolkit.
When possible, reusable entities should be normalized using the EntityAdapter

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into a common bundle), use [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----


## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)