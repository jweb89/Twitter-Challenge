// import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './Menu';
import App from '../App';

const scrollToSpy = jest.fn();
global.scrollTo = scrollToSpy;

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test('Check menu is rendered correctly', () => {
  const { getByText } = render(<Menu />);
  const button1 = getByText('@elonmusk');
  const button2 = getByText('@spacex');
  expect(button1 && button2).toBeTruthy();
});

test('On click, scroll to top of page', () => {
  const { getByText } = render(<App />);
  const button = getByText('@elonmusk');
  fireEvent.click(button);
  expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
});
