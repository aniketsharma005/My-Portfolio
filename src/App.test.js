import React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

test('renders the portfolio content', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(<App />);
  });

  expect(container.textContent).toMatch(/Aniket Sharma/i);
  expect(container.textContent).toMatch(/My Services/i);
  expect(container.textContent).toMatch(/Get in touch/i);

  act(() => {
    root.unmount();
  });
  document.body.removeChild(container);
});
