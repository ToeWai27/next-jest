describe('Main Component', () => {
  beforeEach(() => {
    cy.visit('/') // Adjust the URL if needed
  })

  it('renders the page without errors', () => {
    cy.get('main').should('exist')
  })

  it('displays the correct static text', () => {
    cy.contains('Get started by editing src/app/page.tsx').should('exist')
    cy.contains('Find in-depth information about Next.js features and API.').should('exist')
    cy.contains('Learn about Next.js in an interactive course with quizzes!').should('exist')
    cy.contains('Explore starter templates for Next.js.').should('exist')
    cy.contains('Instantly deploy your Next.js site to a shareable URL with Vercel.').should('exist')
  })

  it('has correct external links', () => {
    cy.get(
      'a[href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"]'
    ).should('have.attr', 'target', '_blank')
    cy.get(
      'a[href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"]'
    ).should('have.attr', 'target', '_blank')
    cy.get(
      'a[href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"]'
    ).should('have.attr', 'target', '_blank')
    cy.get(
      'a[href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"]'
    ).should('have.attr', 'target', '_blank')
    cy.get(
      'a[href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"]'
    ).should('have.attr', 'target', '_blank')
  })

  it('renders images with correct attributes', () => {
    cy.get('img[alt="Vercel Logo"]')
      .should('have.attr', 'src', '/vercel.svg')
      .and('have.attr', 'width', '100')
      .and('have.attr', 'height', '24')
    cy.get('img[alt="Next.js Logo"]')
      .should('have.attr', 'src', '/next.svg')
      .and('have.attr', 'width', '180')
      .and('have.attr', 'height', '37')
  })

  // Optional: Add tests for responsive design, dark mode, etc.
})
