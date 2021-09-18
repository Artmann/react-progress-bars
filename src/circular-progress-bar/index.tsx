import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface CircularProgressBarProps {
  progress: number;

  label?: string;
  width?: number;
};

export function CircularProgressBar({
  progress,
  label = 'Progress Bar',
  width = 300
}: CircularProgressBarProps): ReactElement {
  const strokeWidth = 6;
  const radius = (100 / 2) - (strokeWidth * 2);
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - progress / 100 * circumference;

  return (
    <Container>
      <svg
        aria-label={ label }
        aria-valuemax={ 100 }
        aria-valuemin={ 0 }
        aria-valuenow={ progress }
        height={ width }
        role="progressbar"
        width={ width }
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >

        <Circle
          cx="50"
          cy="50"
          r={ radius }
          strokeWidth={ strokeWidth }
        />

        <FilledCircle
          cx="50"
          cy="50"
          data-testid="progress-bar-bar"
          r={ radius }
          strokeDasharray={ `${ circumference } ${ circumference }` }
          strokeDashoffset={ offset }
          strokeWidth={ strokeWidth }
        />

      </svg>

      <Text data-testid="progress-bar-text">
        { progress }
      </Text>

    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Circle = styled.circle`
  fill: transparent;
  stroke: hsla(225, 20%, 92%, 0.9);
  stroke-linecap: round;
`;

const FilledCircle = styled(Circle)`
  stroke: hsla(225, 23%, 72%, 0.9);
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.5s ease-out;
`;

const Text = styled.div`
  align-items: center;
  color: hsla(225, 23%, 62%, 1);
  display: flex;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  left: 0;
  letter-spacing: 0.025em;
  margin-bottom: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;
