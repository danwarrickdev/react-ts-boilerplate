import { testStories } from '../../../utils/testing';
import * as Stories from '../index.stories';

describe('Header', () => {
  describe('All stories should render successfully', () => {
    testStories(Stories);
  });
});
