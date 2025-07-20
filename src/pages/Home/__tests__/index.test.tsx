import { Home } from '..';
import { render } from '@testing-library/react';

describe('Home', () => {
  const renderComponent = () => {
    return render(<Home />);
  };

  it('match snapshot', () => {
    const rendered = renderComponent();
    expect(rendered).toMatchSnapshot();
  });
});
