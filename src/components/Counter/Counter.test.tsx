import React from 'react';

import Counter from './Counter';
import { getByTestId, render, screen } from '@testing-library/react';

describe('Counter App', () => {
  it('renders the initial count', () => {
    // 1. RENDER the component
    render(<Counter />);

    // 2. FIND the count display element
    const counterText = screen.getByText(/count = 0/i);

    // 3. INTERACT – not needed for this test

    // 4. ASSERT the initial count is 0
    expect(counterText).toBeInTheDocument();
  });
  it('counter displays correct initial count', () => {
    // 1. RENDER the component
    const { getByTestId } = render(<Counter initialCount={0} />);

    // 2. FIND the element we want to inspect (the count value)
    const countDisplay = getByTestId('count');

    // 3. INTERACT – ❌ not needed in this test (we're just checking the initial state)

    // 4. ASSERT the text content shows the correct initial value
    expect(countDisplay).toHaveTextContent('Count = 0');
  });
});

// it('increments the counter', async () => {
//   // 1. RENDER the component
//   render(<Counter />);
//   const user = userEvent.setup();

//   // 2. FIND the increment button
//   const incrementButton = screen.getByRole('button', {
//     name: /increase \+/i,
//   });

//   // 3. INTERACT with the button (click to increment)
//   await user.click(incrementButton);

//   // 4. ASSERT that the count has increased to 1
//   const counterText = screen.getByText(/count = 1/i);
//   expect(counterText).toBeInTheDocument();
// });
