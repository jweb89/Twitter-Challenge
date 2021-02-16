// /* eslint-disable no-undef */
// // import React from 'react';
// // import { mount } from 'cypress-react-unit-test';
// // import App from '../../src/App';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { fetchTweets } from '../apiService';

describe('App check', () => {
  it('App test', () => {
    const mockObserveFn = () => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
    });

    window.IntersectionObserver = jest.fn().mockImplementation(mockObserveFn);
    window.scrollTo = jest.fn();

    const app = render(<App />);
    const option1 = app.getByText('@elonmusk');
    const option2 = app.getByText('@spacex');

    expect(option1.style.color).not.toEqual('white');
    fireEvent.click(option1);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(option1.style.color).toEqual('white');

    expect(option2.style.color).not.toEqual('white');
    fireEvent.click(option2);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(option2.style.color).toEqual('white');

    expect(option1.style.color).not.toEqual('white');
    fireEvent.click(option1);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(option1.style.color).toEqual('white');
  });
});
