import '@testing-library/jest-dom'
import { describe, it, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('renders the component', () => {
    render(<App />);
  })

  it('renders the component with dark theme', () => {
    localStorage.setItem('themeMode', 'dark');
    render(<App />);
    expect(document.body).toHaveClass('dark');

  })
})