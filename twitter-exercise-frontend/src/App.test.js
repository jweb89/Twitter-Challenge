import {
  render,
  screen,
  fireEvent,
  waitFor,
  moc,
  act,
} from '@testing-library/react';
import axiosMock from 'axios';
import json2 from './data2.json';
import App from './App';

// const scrollToSpy = jest.fn();
// global.scrollTo = scrollToSpy;

jest.mock('axios');

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

describe('App check', () => {
  it('Tweets are loaded on click', async () => {
    window.scrollTo = jest.fn();
    const {
      getByText,
      findAllByTestId,
      getAllByText,
      queryAllByTestId,
    } = render(<App />);

    await act(async () => {
      axiosMock.get.mockResolvedValue({ data: json2 });
      fireEvent.click(getByText('@elonmusk'));
    });
    const tweetLength = queryAllByTestId('tweet').length;
    expect(tweetLength).toBe(20);
  });
});

test('More tweets are loaded on scroll', async () => {
  const { getByText, findAllByTestId, getAllByText, queryAllByTestId } = render(
    <App />
  );
  await act(async () => {
    fireEvent.click(getByText('@elonmusk'));
    axiosMock.get.mockResolvedValue({ data: json2 });
    fireEvent.scroll(window, { target: { scrollY: 10000 } });
  });

  await waitFor(() => expect(queryAllByTestId('tweet').length).toBe(40));
});
