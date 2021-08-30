import * as React from 'react';
import { ContainerProps } from './types';

const FullScreenContainer = ({ children }: ContainerProps): React.ReactElement => (
  <div style={
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '100vh',
    }
  }
  >
    {children}
  </div>
);

export default FullScreenContainer;
