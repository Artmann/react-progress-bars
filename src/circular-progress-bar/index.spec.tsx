import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CircularProgressBar } from '.';

describe('Progress Bar', () => {

  it('has a label with the current progress.', () => {

    render(<CircularProgressBar progress={ 45 } />);

    const label = screen.getByTestId('progress-bar-text');

    expect(label).toHaveTextContent('45');
  });

  it('fills the progress bar.', () => {

    render(<CircularProgressBar progress={ 50 } />);

    const bar = screen.getByTestId('progress-bar-bar');

    expect(bar).toHaveAttribute('stroke-dashoffset', '119.38052083641213');
  });

});
