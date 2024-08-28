import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Calculator, { CalculatorProps } from '../components/Calculator'
import '@testing-library/jest-dom'

describe('Calculator', () => {
  it('renders the component', () => {
    const props: CalculatorProps = {
      themeMode: 'light',
      changeThemeMode: () => {}
    };
    render(<Calculator {...props} />);
    expect(screen.getByText('Calculator')).toBeInTheDocument();
  })
})