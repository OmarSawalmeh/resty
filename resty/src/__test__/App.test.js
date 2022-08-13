import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from '../app'

beforeEach(() => {
  render(<App />)
})

test('Load and display app', async () => {
  const header = await waitFor(() => screen.getByTestId('header'))
  expect(header.textContent).toBe('RESTy')
})

test('Change Methods [GET / POST / PUT / DELETE]', async () => {
  const postButton = screen.getByTestId('postButton');
  fireEvent.click(postButton);
  const method = screen.getByTestId('method');
  expect(method).toHaveTextContent('POST')
})

test('Change URL', async () => {
  const postButton = screen.getByTestId('postButton')
  fireEvent.click(postButton)
  const method = screen.getByTestId('method')
  expect(method).toHaveTextContent('POST')
})

