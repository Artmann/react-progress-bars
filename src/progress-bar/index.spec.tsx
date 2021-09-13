import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ProgressBar } from '.';

describe('Progress Bar', () => {

  it('has a label with the current progress.', () => {

    render(<ProgressBar progress={ 45 } />);

    const label = screen.getByTestId('progress-bar-text');

    expect(label).toHaveTextContent('45%');
  });

  it('fills the progress bar.', () => {

    render(<ProgressBar progress={ 55 } />);

    const bar = screen.getByTestId('progress-bar-bar');

    expect(bar).toHaveStyle('width: 55%');
  });

});
