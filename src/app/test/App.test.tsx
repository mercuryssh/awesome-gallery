import * as React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Find picture in the document', () => {
  render(<App />);
  const linkElement = document.getElementById('picture');
  expect(linkElement).toBeInTheDocument();
});
