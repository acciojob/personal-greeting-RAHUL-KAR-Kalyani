// Greeting.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './Greeting';

test('displays a personal greeting', () => {
  render(<Greeting />);

  // Check the initial rendering
  expect(screen.getByText('Enter your name:')).toBeInTheDocument();
  expect(screen.queryByText(/Hello /)).toBeNull();

  // Simulate typing into the input
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'n' } });

  // Check the updated rendering
  expect(screen.getByText('Hello n')).toBeInTheDocument();
});
