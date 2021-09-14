import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  progress: number;

  label?: string;
  width?: number;
};

export function ProgressBar({
  progress,
  label = 'Progress Bar',
  width = 300
}: ProgressBarProps): ReactElement {
  return (
    <Container
      aria-label={ label }
      aria-valuemax={ 100 }
      aria-valuemin={ 0 }
      aria-valuenow={ progress }
      role="progressbar"
      width={ width }
    >
      <Text data-testid="progress-bar-text">
        { progress }%
      </Text>

      <Bar>
        <FilledBar
          data-testid="progress-bar-bar"
          width={ progress }
        />
      </Bar>
    </Container>
  );
}

const Bar = styled.div`
  background: hsla(225, 20%, 92%, 0.9);
  border-radius: 0.5rem;
  height: 0.75rem;
  width: 100%;
`;

const FilledBar = styled(Bar)<{ width: number }>`
  background: hsla(225, 23%, 72%, 0.9);
  transition: width 0.5s ease-out;
  width: ${ props => props.width }%;
`;

const Container = styled.div<{ width: number }>`
  width: ${ props => props.width }px;
`;

const Text = styled.div`
  color: hsla(225, 23%, 62%, 1);
  font-weight: bold;
  letter-spacing: 0.025em;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`;
