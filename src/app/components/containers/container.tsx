import * as React from 'react';
import { ContainerProps } from './types';

const Container = ({ children }: ContainerProps): React.ReactElement => (
  <div className="container">
    <div>{children}</div>
  </div>
);

export default Container;
