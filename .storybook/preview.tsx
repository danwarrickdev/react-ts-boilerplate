import type { Preview } from '@storybook/react-webpack5';
import { Providers } from '../src/providers';
const preview: Preview = {
  decorators: [
    (Story) => (
      <Providers>
        <div style={{ height: '100vh', width: '100vw' }}>
          <Story />
        </div>
      </Providers>
    ),
  ],
};

export default preview;
