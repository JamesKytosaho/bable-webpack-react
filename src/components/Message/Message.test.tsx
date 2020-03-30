import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Message from './Message';

describe('<Message />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Message message={"test"} />);
    const message = getByTestId('Message');

    expect(message).toBeInTheDocument();
  });
});