import type { Preview } from '@storybook/react-webpack5'
import {StyleDecorator} from "../../src/shared/config/storyBook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storyBook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider";


const preview: Preview = {
  decorators: [StyleDecorator],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;