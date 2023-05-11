describe('Anecdote site', () => {
  it('site opens', () => {
    cy.visit('http://localhost:5000/')
    cy.contains('Anecdotes')
    cy.contains('Just a random anecdote')
    cy.contains('create new')
  })
  it('Click specific button to vote', () => {
    cy.visit('http://localhost:5000')
    cy.contains('Another random anecdote').next().contains('vote').click()
    cy.contains('Anecdote has 6 votes')
  })
})
