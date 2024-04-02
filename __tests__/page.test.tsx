import Page from '../src/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
