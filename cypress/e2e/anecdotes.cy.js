describe('Anecdote site', () => {
  it('site opens', () => {
    cy.visit('http://localhost:5000/')
    cy.contains('Anecdotes')
    cy.contains('Just a random anecdote')
    cy.contains('Create new')
  })
  it('Click specific button to vote', () => {
    cy.visit('http://localhost:5000')
    cy.get('[data-cy="vote"]').eq(0).click()
    cy.contains('Anecdote has 6 votes')
  })
})
