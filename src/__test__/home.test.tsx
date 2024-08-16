import Home from '@/app/page' // Replace with the actual component file path
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  test('renders without crashing', () => {
    render(<Home />)
  })

  test('displays the correct static text', () => {
    render(<Home />)
    expect(screen.getByText('Get started', { exact: true })).toBeInTheDocument()
    expect(screen.getByText(/Find in-depth information about Next.js features and API./i)).toBeInTheDocument()
  })

  test('has correct links', () => {
    render(<Home />)
    expect(screen.getByRole('link', { name: /by/i })).toHaveAttribute(
      'href',
      'https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    )
    expect(screen.getByRole('link', { name: /Docs/i })).toHaveAttribute(
      'href',
      'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    )
  })

  test('renders images with correct attributes', () => {
    render(<Home />)
    const logoImage = screen.getByAltText('Next.js Logo')
    expect(logoImage).toHaveAttribute('src', '/next.svg')
    expect(logoImage).toHaveAttribute('width', '180')
    expect(logoImage).toHaveAttribute('height', '37')
  })
})
