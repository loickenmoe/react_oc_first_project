import { ThemeProvider } from 'styled-components'
import Footer from './Footer'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Footer', () => {
  test('Change theme', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})
