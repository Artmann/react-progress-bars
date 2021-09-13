import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { CircularProgressBar } from './circular-progress-bar';
import { ProgressBar } from './progress-bar';

export function App(): ReactElement {
  const [ progress, setProgress ] = useState(50);

  const updateProgress = (delta: number): void => {
    const newProgress = Math.max(0, Math.min(100, progress + delta));

    setProgress(newProgress);
  };

  return (
    <Container>

      <Row>
        <CircularProgressBar progress={ progress } width={ 135 } />
      </Row>

      <Row>
        <ProgressBar progress={ progress } />
      </Row>

      <Row>
        <Button onClick={ () => updateProgress(-10) }>
          Decrease
        </Button>
        <Button onClick={ () => updateProgress(+10) }>
          Increase
        </Button>
      </Row>
    </Container>
  );
}

const Button = styled.button`
  background: transparent;
  border: solid 1px hsla(225, 20%, 82%, 0.9);
  border-radius: 4px;
  cursor: pointer;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
`;

const Container = styled.div`
  align-items: center;
  justifty-content: center;
  padding: 2rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
`;
