import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//test function is globally available in a CRA project.
//test function takes two paramters . test name and function to be executed as  a test.
//screen contains methods to query virtual dom

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
