import * as React from 'react';
import { ReactElement } from 'react';
import FullScreenContainer from './components/containers/fullscreenContainer';
import Container from './components/containers/container';
import './styles/app.sass';

export default function App(): ReactElement {
  return (
    <div className="App">
      <FullScreenContainer>
        <Container>
          <img id="picture" src="pink.png" width="300px" alt="" />
        </Container>
      </FullScreenContainer>
    </div>
  );
}
